export default function Template({ children }: { children: React.ReactNode }) {
    // useEffect(() => {
    //     setTimeout(function() {
    //         // window.moveTo(0,0)
    //         // window.scrollTo(0, 0);
    //     }, 0);
    // }) 

    // const router = useRouter();
    // useEffect(()=>{
    //     const handleRouteChange = () => {
    //         window.scrollTo(0, 0);
    //     }
    //     router.events.on('routeChangeComplete', handleRouteChange)
    // },[]);

    return (
        <div className="pt-20">
            {children}
        </div>
    )
}