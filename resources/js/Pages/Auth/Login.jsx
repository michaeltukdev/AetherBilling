import React from 'react'
import MainInput from '../../Components/ui/inputs/MainInput';
import CheckboxInput from '../../Components/ui/inputs/CheckboxInput';
import { Link, useForm } from '@inertiajs/react'

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false
    });

    function submit(e) {
        e.preventDefault();
        post('/auth/login');
    }

    return (
        <div className="flex items-center justify-center min-h-screen container mx-auto">
            <div className="w-fit md:min-w-[460px]">
                <form className="mt-10" onSubmit={submit}>
                    <img className="mx-auto" height="80" width="80" src="/images/default/branding/logo.webp" alt="Logo" />

                    <div className="bg-surface rounded-3xl mt-10">
                        <div className="p-8 space-y-8">
                            <MainInput className='w-full' label="Email" name="email" required placeholder="Email" type="email" error={errors.email} value={data.email} onChange={e => setData('email', e.target.value)} />
                       
                            <MainInput className='w-full' label="Password" name="password" required placeholder="Password" type="password" error={errors.password} value={data.password} onChange={e => setData('password', e.target.value)} />

                            <CheckboxInput label="Remember Me" name="remember" checked={data.remember} onChange={e => setData('remember', e.target.checked)} error={errors.remember} />

                            <button  type="submit"  className="bg-accent w-full text-background hover:bg-accent-light transition py-2.5 px-10 rounded-lg font-medium text-15" disabled={processing}>{processing ? 'Signing In...' : 'Sign In'}</button>
                        </div>

                        <div className="p-8 border-t border-input-border">
                            <p className="text-sm text-center font-medium">
                                Not registered with us? <Link className="text-accent hover:text-accent-light transition" href="/auth/register">Create a new account</Link>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}