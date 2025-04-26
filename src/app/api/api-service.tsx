import { supabase } from "@/lib/supabase";

type FetchWithAuthOptions = {
    method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
    body?: any;
    headers?: HeadersInit;
};

export const apiService = async (endpoint: string, options: FetchWithAuthOptions = {}) => {
    let accessToken = sessionStorage.getItem("accessToken");

    const tryFetch = async (token: string) => {
        const headers: HeadersInit = {
            ...options.headers,
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        };

        const res = await fetch(endpoint, {
            ...options,
            headers,
            body: options.body ? JSON.stringify(options.body) : undefined,
        });

        // If token expired
        if (res.status === 401) {
            throw new Error("Unauthorized");
        }

        if (!res.ok) {
            const errorBody = await res.json();
            throw new Error(errorBody.message || "Fetch failed");
        }

        return res.json();
    };

    try {
        return await tryFetch(accessToken!);
    } catch (err: any) {
        if (err.message === "Unauthorized") {
            // Try to refresh token
            const refreshToken = localStorage.getItem("refreshToken");
            if (!refreshToken) throw new Error("No refresh token found");

            const { data, error } = await supabase.auth.refreshSession({
                refresh_token: refreshToken,
            });

            if (error || !data.session) throw new Error("Token refresh failed");

            const newAccessToken = data.session.access_token;
            const newRefreshToken = data.session.refresh_token;

            // Store updated tokens
            sessionStorage.setItem("accessToken", newAccessToken);
            localStorage.setItem("refreshToken", newRefreshToken);

            // Retry the original request
            return await tryFetch(newAccessToken);
        } else {
            throw err;
        }
    }
};
