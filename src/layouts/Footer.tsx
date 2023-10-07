export default function Footer({

}) {
    return (
        <footer className="mt-10 h-24 bg-grey text-sm">
            <div className="container h-full flex justify-between">
                <section className="flex items-center gap-8 font-semibold ">
                    <span className="text-dark-light font-normal">Copyright © 2023 TeS Inc. All rights reserved.</span>
                    <span>Privacy Policy</span>
                    <span>Terms of Use</span>
                    <span>Legal</span>
                    <span>Site Map</span>
                </section>
                <section className="flex items-center">
                    Vietnam
                </section>
            </div>
        </footer>
    )
}