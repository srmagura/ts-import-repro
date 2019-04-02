import * as React from 'react'

export interface PageProps {
    title: string
}

export class Page extends React.Component<PageProps> {
    render() {
        return <div>{this.props.title}</div>
    }
}
