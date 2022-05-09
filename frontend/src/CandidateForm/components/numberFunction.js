
//if the user didnt choose number , will open checkbox that asks if the user has no degrees, to do data analyst //

export function NumberFunction(curr) {
    return (
        <div className='numberInput'>
            <label> {curr.label}</label>

            <div>
                <input type="number" min={curr.properties.min} max={curr.properties.max} />

            </div>

        </div>
    )
}
