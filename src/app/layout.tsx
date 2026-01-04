// import React from 'react'
export default function RootLayout({children}: {children:React.ReactNode}) {
  return (
    <html>
      <body style={{
        margin:0,
        padding:0
      }}>
        <header style={{
          marginTop:"0px",
          background:"lightblue",
          height:"50px"
        }}>
          <p>Header</p>
        </header>
      <div>{children}</div>
      </body>
    </html>
  )
}
