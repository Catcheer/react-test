export const submitLogin = (content) => {
    console.log('content', content)
    return {
        type: 'SUBMIT_LOGIN',
        value:content
    }
}

