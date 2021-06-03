import Social from 'components/Social'
import React from 'react'
import HeaderDashboard from './HeaderDashboard'

function Main({ title, children }) {
    return (
        <main className="p-4 xl:p-10  2xl:ml-72 xl:ml-16  pb-6">
            <HeaderDashboard title={title} />
            <div className="pb-10  min-h-screen">
                {children}
            </div>
            <Social />
        </main>

    )
}

export default Main
