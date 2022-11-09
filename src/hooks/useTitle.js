import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}-Dental Whiz`
    }, [title])
}

export default useTitle