import React from "react"
import { Switch, Route} from "react-router-dom"

import Home from './pages/home/home'
import Blocks from './pages/blocks/blocks'
import Cards from './pages/cards/cards'
import Forms from './pages/forms/forms'
import Pricing from './pages/pricing/pricing'


export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/home" component={Home}/>
            <Route path="/blocks" component={Blocks}/>
            <Route path="/cards" component={Cards}/>
            <Route path="/forms" component={Forms}/>
            <Route path="/pricing" component={Pricing}/>
        </Switch>
    )
}