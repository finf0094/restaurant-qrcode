import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'

import App from 'app/App'

import { ErrorPage } from 'pages/ErrorPage'

import 'shared/config/i18n/i18n'

import 'app/styles/index.scss'

const rootElement = document.getElementById('root')

if (!rootElement) throw new Error('Failed to find the root element')

const root = createRoot(rootElement)

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ErrorBoundary fallback={<ErrorPage/>}>
                    <App />
            </ErrorBoundary>
        </BrowserRouter>
    </React.StrictMode>
)
