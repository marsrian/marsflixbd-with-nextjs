import React from 'react'
import SignupForm from '@/components/form/SignupForm'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'

const Signup = async () => {

  const session = await getServerSession(authOptions)

  if(session) redirect("/")

  return (
    <div>
      <SignupForm />
    </div>
  )
}

export default Signup