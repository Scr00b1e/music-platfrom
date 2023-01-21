import React from "react"

export const useInput = (initialValue: any) => {
    const [value, setValue] = React.useState(initialValue)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return {
        value, onChange
    }
}