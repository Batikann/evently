const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-50">
      {children}
    </div>
  )
}
export default Layout
