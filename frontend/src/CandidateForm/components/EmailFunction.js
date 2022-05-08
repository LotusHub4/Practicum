

export function EmailFunction(curr) {

    return (
        <div className='emailInput'>
            <label> {curr.label}</label>

            <div>
                <input type="email" placeholder="example@example.com" required />
            </div>

        </div>
    )
}
