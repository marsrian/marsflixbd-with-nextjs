import React from 'react'
import LoginForm from '@/components/form/LoginForm'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

const Login = async () => {
  const session = await getServerSession(authOptions)

  if(session) redirect("/")
  return (
    <div>
      <LoginForm />
    </div>
  )
}

export default Login