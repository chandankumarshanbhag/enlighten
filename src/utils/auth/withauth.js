export default function withAuth(component){
    console.log("getServerSideProps",component.getServerSideProps)
    return component;
}