
export function TextAreaFunction(textItems) {
    const isRequired = textItems.requierd
    return (

        <div className='textAreaClass'>
            <label> {textItems.label}</label>
            {isRequired ?
                <textarea cols={25} rows={20} maxLength={500} required />
                :
                <textarea cols={25} rows={20} maxLength={500} />
            }
        </div>

    )
}
