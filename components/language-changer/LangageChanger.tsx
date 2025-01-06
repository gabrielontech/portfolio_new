'use client';

import { useRouter, usePathname } from '@/navigation';

interface LanguageChangerProps {
  locale: string;
}

export default function LanguageChanger({ locale }: LanguageChangerProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(pathname, { locale: e.target.value });
  };

  return (
    <select
      value={locale}
      onChange={handleChange}
      className="bg-transparent appearance-none cursor-pointer 
               focus:outline-none text-sm font-medium
               text-gray-700 dark:text-gray-200"
    >
      <option value="en">🇬🇧 EN</option>
      <option value="fr">🇫🇷 FR</option>
    </select>
  );
}