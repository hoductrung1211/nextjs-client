import Header from '@/src/layouts/Header'
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        <Header />
        {children} 
    </>
  )
}
