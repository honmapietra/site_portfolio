import React from 'react';

function Page({ page }) {
    console.log({ page })

    return (
        <div>
            {!!page.body ? <page.body /> : null}
        </div>
    )
}

export default Page;