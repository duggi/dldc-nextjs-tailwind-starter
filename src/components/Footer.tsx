import { FacebookIcon, InstagramIcon, BlueskyIcon, GitHubIcon, YouTubeIcon } from '@/components/icons/socials';

const navigation = [
  {
    name: 'Facebook',
    href: '#',
    icon: FacebookIcon,
  },
  {
    name: 'Instagram',
    href: '#',
    icon: InstagramIcon,
  },
  {
    name: 'Bluesky',
    href: '#',
    icon: BlueskyIcon,
  },
  {
    name: 'GitHub',
    href: '#',
    icon: GitHubIcon,
  },
  {
    name: 'YouTube',
    href: '#',
    icon: YouTubeIcon,
  },
];

export default function Footer() {
  return (
    <>
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center gap-x-6 md:order-2">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-white">
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" className="size-6" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-sm/6 text-gray-400 md:order-1 md:mt-0">
          &copy; {new Date().getFullYear()} DLDC, All rights reserved.
        </p>
      </div>
    </footer>
    </>
  )
}
