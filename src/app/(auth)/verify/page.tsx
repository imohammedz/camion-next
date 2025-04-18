'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase' // or wherever your client is

export default function VerifyPage() {
    const router = useRouter()
    const [countdown, setCountdown] = useState(3)
    const [loading, setLoading] = useState(true)
    const [message, setMessage] = useState('Verifying your email...')
    const [accessToken,setaccessToken] = useState("")

    useEffect(() => {
        const verifyAndStoreUser = async () => {
            // Get current session to extract the access token
            const {
                data: { session },
                error: sessionError,
            } = await supabase.auth.getSession();

            if (sessionError || !session) {
                setMessage('❌ Failed to get session.');
                setLoading(false);
                return;
            }

            const accessToken = session.access_token;

            setaccessToken(accessToken)



            // Get the user (which includes metadata)
            const {
                data: { user },
                error: userError,
            } = await supabase.auth.getUser();

            if (user) {
                const metadata = user.user_metadata;

                const userPayload = {
                    id:user.id,
                    firstName: metadata.firstName,
                    lastName: metadata.lastName,
                    email: metadata.email,
                    phoneNumber: metadata.phoneNumber,
                    role: metadata.role,
                    userName: metadata.userName,
                  };

                // Call your backend API to store the user
                const saveRes = await fetch('/api/save-user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${accessToken}`,
                    },
                    body: JSON.stringify(userPayload),
                });

                if (saveRes.ok) {
                    setMessage('✅ Your email has been verified successfully!');
                } else {
                    setMessage('⚠️ Email verified, but we couldn’t save your profile.');
                }

                setLoading(false);
            } else {
                setMessage('❌ Verification failed or expired.');
                setLoading(false);
            }
        };

        verifyAndStoreUser();
    }, []);


    // Handle countdown and redirect
    useEffect(() => {
        if (!loading && countdown > 0) {
            const timer = setTimeout(() => setCountdown((c) => c - 1), 1000)
            return () => clearTimeout(timer)
        } else if (!loading && countdown === 0) {
            //router.push('/login')
        }
    }, [countdown, loading, router])

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white shadow-xl rounded-2xl p-10 max-w-md text-center space-y-4">
                <h1 className="text-2xl font-bold text-green-600">{message}</h1>
                <span>
                    {accessToken}
                </span>
                {!loading && (

                    <p className="text-gray-500">Redirecting to login in {countdown} second{countdown !== 1 ? 's' : ''}...</p>
                )}
            </div>
        </div>
    )
}
