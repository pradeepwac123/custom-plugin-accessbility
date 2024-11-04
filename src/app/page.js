import Image from "next/image";
import styles from "./page.module.css";
import "./common.scss";
import CustomPlugin from "@/Components/CustomPlugin";

export default function Home() {
  return (
    <div className={`${styles.page} `}>

      <CustomPlugin />
      <div className="main">
        <header className="bg-white text-black px-5 py-5 text-[1.5625rem] dark:bg-black dark:text-white shadow-[0_1px_2px_0px_rgba(211,211,211,1)] fixed w-full">
          Header
        </header>
        <main className="pt-[81px] ">



          <section className="bg-white text-black dark:text-white dark:bg-black">
            <div className="container mx-auto">
              <div className="grid grid-cols-12">
                <div className="col-span-6"></div>
                <div className="col-span-6">
                  <h1>heading 1</h1>
                  <h2>heading 2</h2>
                  <h3>heading 3</h3>
                  <h4>heading 4</h4>
                  <h5>heading 5</h5>
                  <h6>heading 6</h6>
                  <p className="text-yellow-300">Paragraph</p>
                  <span className="text-green-500">span elements</span>

                  <a>home</a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-white text-black dark:text-white dark:bg-black px-5 py-5 text-[1.5625rem]">
          Footer
        </footer>
      </div>
    </div>
  );
}
