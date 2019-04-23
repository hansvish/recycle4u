import React from 'react';
import RecycleItem from './RecycleItem/RecycleItem';
import "./RecycleItems.css"

const RecycleItems = () => (
    <div class="container recycleItems">
        <h1 id="alpha-A">A</h1>
        <div class="row">
            <div id="Aerosol" class="col-sm item">
                <RecycleItem item="Aerosol">
                    <div>
                        <p>Ensure aerosols are completely empty before recycling. Detach any loose or easily removable parts, such as the lid, and dispose them with the rest of your recycling at the recycling bins near you.</p> 
                    </div>
                </RecycleItem> 
            </div>
            <div id="AlFo" class="col-sm item">
                <RecycleItem item="Aluminium Foil">
                    <div>
                        <p>Rinse or wipe off any crumbs or food residue from foil trays before recycling in your nearest recycle bin.</p>
                    </div>
                </RecycleItem>
            </div>
        </div>
        <h1 id="alpha-B">B</h1>
        <div class="row">
            <div id="Batteries" class="col-sm item">
                <RecycleItem item="Batteries">
                    <div>
                        <p>Regular household batteries can be recycled in the nearest recycle bins</p>
                    </div>
                </RecycleItem>
            </div>
            <div id="Books" class="col-sm item">
                <RecycleItem item="Books">
                    <div>
                        <p>Books can be sold or donated at local stores or at a Salvation Army.</p>
                    </div>
                    <a href="/locations">Locate recycling centres</a>
                </RecycleItem>
            </div>
        </div>
        <h1 id="alpha-C">C</h1>
        <div class="row">
            <div id="Clothes" class="col-sm item">
                <RecycleItem item="Clothes">
                    <div>
                        <p>Clothes can be taken either to your nearby recycling bin or a recycling centre where it can be donated, such as Salvation Army. Clothes can also be sold at thrift stores.</p>
                    </div>
                    <a href="/locations">Locate recycling centres</a>
                </RecycleItem>
            </div>
        </div>
        
    </div>
)

export default RecycleItems;