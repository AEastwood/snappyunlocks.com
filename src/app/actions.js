'use server';

import { cookies } from 'next/headers';

export async function setLocale(formData) {
    const locale = formData.get('locale');
    cookies().set('locale', locale);
} 