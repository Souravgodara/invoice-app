'use client'
import { Button } from '@/components/ui/button'
import { signOut } from 'next-auth/react'
import React from 'react'

export default function LogOutButton() {
    return <Button variant={'destructive'} onClick={async () => await signOut()} className="w-full text-left">Log out</Button>

}
