import React from 'react';

import { ShoppingListContext } from './ShoppingListContext';

function withShoppingList(Component) {
    return class extends Component {
        render() {
            return (
                <ShoppingListContext.Consumer>
                    {context =>
                        <Component
                            {...this.props}
                            shoppingList={context}
                        />
                    }
                </ShoppingListContext.Consumer>
            )
        }
    }
}

export default withShoppingList;