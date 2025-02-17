'use client'

import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from 'lucide-react'
import { motion } from 'motion/react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useState } from 'react'

import { Button, buttonVariants } from '#components/button'

const HEADER_NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/craft', label: 'Craft' },
] as const

function DynamicLink({
  path,
  href,
  children,
  ...props
}: React.ComponentProps<'a'> & { path: string }) {
  return path === href ? (
    <Link href={href} {...props}>
      {children}
    </Link>
  ) : (
    <a href={href} {...props}>
      {children}
    </a>
  )
}

function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  const handleClick = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="size-9 rounded-xl"
      onClick={handleClick}
    >
      <SunIcon className="dark:-rotate-90 rotate-0 scale-100 transition-transform dark:scale-0" />
      <MoonIcon className="absolute rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

function SiteHeader({ path }: { path: string }) {
  const [activePath, setActivePath] = useState<string>(path)

  return (
    <header className="container sticky top-0 z-50 mx-auto flex justify-center px-4 pt-6">
      <div className="flex items-center gap-1 rounded-2xl border bg-background p-1 shadow-lg">
        <nav className="flex gap-1">
          {HEADER_NAV_LINKS.map(({ href, label }) => (
            <DynamicLink
              key={href}
              path={path}
              href={href}
              className="relative px-4 py-2 font-medium text-sm"
              onMouseEnter={() => setActivePath(href)}
              onMouseLeave={() => setActivePath(path)}
            >
              {activePath === href && (
                <motion.div
                  layoutId="highlight"
                  transition={{ type: 'spring', bounce: 0.2 }}
                  className="absolute inset-0 z-10 rounded-xl border bg-secondary/80"
                />
              )}
              <span className="relative z-20">{label}</span>
            </DynamicLink>
          ))}
        </nav>
        <div className="flex gap-1">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

const FOOTER_NAV_LINKS = {
  SOCIAL: [
    { href: 'mailto:devwontory@gmail.com', icon: MailIcon },
    { href: 'https://www.linkedin.com/in/wontory', icon: LinkedinIcon },
    { href: 'https://x.com/devwontory', icon: TwitterIcon },
    { href: 'https://github.com/wontory', icon: GithubIcon },
  ],
  GENERAL: [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: '/craft', label: 'Craft' },
  ],
} as const

function SiteFooter({ path }: { path: string }) {
  return (
    <footer className="container mx-auto flex flex-col items-center gap-4 p-4">
      <div className="w-full rounded-2xl bg-primary p-10 text-primary-foreground">
        <div className="grid gap-8 lg:grid-flow-col lg:grid-cols-7 lg:gap-16">
          <div className="flex flex-col justify-center lg:col-span-2">
            <h4 className="mb-2 font-bold text-xl">Wontory</h4>
            <span className="text-primary-foreground/50 text-sm">
              Frontend Developer who loves UX Improvements with Animations.
            </span>
            <div className="mt-4 flex gap-4 text-primary-foreground/80">
              {FOOTER_NAV_LINKS.SOCIAL.map(({ href, icon: Icon }) => (
                <a key={href} href={href} target="_blank" rel="noreferrer">
                  <Icon strokeWidth={1.5} className="size-5" />
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center lg:col-span-3">
            <div className="flex flex-col gap-4 text-sm">
              <h4 className="font-medium text-primary-foreground/50">
                General
              </h4>
              <ul className="space-y-2">
                {FOOTER_NAV_LINKS.GENERAL.map(({ href, label }) => (
                  <li key={href}>
                    <DynamicLink path={path} href={href}>
                      {label}
                    </DynamicLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-center lg:col-span-2">
            <h4 className="mb-2 font-bold">Stay in touch</h4>
            <span className="mb-4 text-primary-foreground/50 text-sm">
              Don't miss out. Get an email whenever I post, no spam.
            </span>
            <a
              href="https://wontory.substack.com/subscribe"
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: 'secondary' })}
            >
              Subscribe Now
            </a>
          </div>
        </div>
      </div>
      <span className="text-center text-muted-foreground text-sm">
        &copy; {new Date().getFullYear()} Wontory. All rights reserved.
      </span>
    </footer>
  )
}

export { SiteHeader, SiteFooter }
