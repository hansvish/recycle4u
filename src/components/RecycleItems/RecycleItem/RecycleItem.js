import React from 'react';

const RecycleItem = props =>(
    <div class="container">
        <h3>{props.item}</h3>
        <p>{props.children}</p>
    </div>
)

export default RecycleItem;