import { config } from '../cms/config';
import { useEffect } from 'react'


export default function Admin() {
    useEffect(() => {
        (async () => {
            const CMS = (await import('netlify-cms-app')).default;
            CMS.init({ config });
        })();
    }, []);

    return <div />
}