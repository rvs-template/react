import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';


render(
    <Provider store={store}>
        <Main store={store} />
    </Provider>,
    document.getElementById('app')
);
