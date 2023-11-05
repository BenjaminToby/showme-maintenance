export default function Page() {
    return <>No mans land</>;
}

export async function getServerSideProps() {
    return {
        redirect: {
            destination: "/",
            permanent: false,
        },
    };
}
