import * as React from 'react'
import{ PageProps, Page } from './page'

export function myFunction<TProps>(loader: () => Promise<React.ComponentType<TProps>>) {

}

// No error
myFunction(() => Promise.resolve(Page))

// No error
const loader: () => Promise<React.ComponentType<PageProps>> = () => import('./page').then(m => m.Page)

// Error
myFunction(() => import('./page').then(m => m.Page))
