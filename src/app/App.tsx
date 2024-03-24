import { type FC, Suspense } from 'react'

import { AppRouter } from '@/app/providers/router'

import { Navbar } from '@/widgets/Header'
import { PageLoader } from '@/widgets/PageLoader'

import { classNames } from '@/shared/lib/classNames'

const App: FC = () => {

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback={<PageLoader/>}>
                <Navbar/>
                <div className="content-page">
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    )
}

export default App
