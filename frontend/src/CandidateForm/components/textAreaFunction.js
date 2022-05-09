
export function TextAreaFunction(curr) {
    const isRequired = curr.requierd
    return (

        <div className='textAreaClass'>
            <label> {curr.label}</label>
            {isRequired ?
                <textarea cols={25} rows={20} maxLength={500} required />
                :
                <textarea cols={25} rows={20} maxLength={500} />
            }
        </div>

    )
}
