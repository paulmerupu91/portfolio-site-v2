'use client';
// // On page load or when changing themes, best to add inline in `head` to avoid FOUC
// if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//     document.documentElement.classList.add('dark')
//   } else {
//     document.documentElement.classList.remove('dark')
//   }
  
//   // Whenever the user explicitly chooses light mode
//   localStorage.setItem('theme', 'light')
  
//   // Whenever the user explicitly chooses dark mode
//   localStorage.setItem('theme', 'dark')
  
//   // Whenever the user explicitly chooses to respect the OS preference
//   localStorage.removeItem('theme')

// if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//     document.documentElement.classList.add('dark')
// } else {
//     document.documentElement.classList.remove('dark')
// }

// Store theme value in cookie
export function setTheme(theme: string) {
    document.cookie = `theme=${theme}; path=/`;
}

export function getTheme() {
    const theme = document.cookie.split('; ').find(row => row.startsWith('theme='));
    return theme?.split('=')[1];
}