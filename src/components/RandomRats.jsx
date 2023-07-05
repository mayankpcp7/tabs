import React from "react";
import logo from "../assets/png/page_logo.png";
import boat from "../assets/png/boat.png";
import twitter from "../assets/png/twitter.png";
import network from "../assets/png/nav_sec.png";
import tree from "../assets/png/tree.png";
import skull from "../assets/png/skull.png";
import rat from "../assets/png/rat.png";
import bigrat from "../assets/png/bigrat.png";
const RandomRats = () => {
  return (
    <>
      <header className="rat_bg vh_100 d-flex flex-column   ">
        <nav className="container-fluid px-5">
          <div className="d-flex align-items-center justify-content-between">
            <div className="logo">
              <img className="w-100" src={logo} alt="logo" />
            </div>
            <div className="d-flex align-items-center">
              <div className="px-2">
                <img
                  className="w_sm_100 curser_pointer"
                  src={boat}
                  alt="boat"
                />
              </div>
              <div className="px-2">
                <img
                  className="w_sm_100 curser_pointer"
                  src={network}
                  alt="network"
                />
              </div>
              <div className="px-2">
                <img
                  className="w_sm_100 curser_pointer"
                  src={twitter}
                  alt="twitter"
                />
              </div>
            </div>
          </div>
        </nav>
        <div className="container vh_100 d-flex flex-column ">
          <main className="d-flex flex-column justify-content-center flex-grow-1 py-lg-0 py-5">
            <p className="text-center text-white ff_mono position-relative mb-0 ">
              TANSTAAFL : There ain’t no such thing as a free lunch
            </p>
            <h1 className="text-center fs_xl ff_press mb-0 color_red py-3">
              FREE MINT
            </h1>
            <p className="text-center text-white ff_mono mb-0">
              ...sounds Cheesy... Nom Nom
            </p>
            <p className="text-lg-start text-center text-white ff_press mb-0 pt-5 ">
              Proof: Randomrats > Nuclear Blast > Moonbirds & Moonrunners
            </p>
            <div className="row justify-content-between py-4">
              <div className="col-lg-6 overflow_x_scroll">
                <table>
                  <tr className="">
                    <td>
                      <p className="ff_mono fs_md text-white fw-semibold">
                        Moonbirds
                      </p>
                    </td>
                    <td className="px-4">
                      <p className="ff_press text-white fs_lg ">+</p>
                    </td>
                    <td className="px-4">
                      <img className="w-100" src={tree} alt="tree" />
                    </td>
                    <td className="px-4">
                      <p className="ff_press text-white fs_lg">=</p>
                    </td>
                    <td className="px-3">
                      <img src={skull} alt="tree" />
                    </td>
                  </tr>
                  <tr className="mt-4">
                    <td>
                      <p className="ff_mono fs_md text-white fw-semibold">
                        Moonrunners
                      </p>
                    </td>
                    <td className="px-4">
                      <p className="ff_press text-white fs_lg ">+</p>
                    </td>
                    <td className="px-4">
                      <img className="" src={tree} alt="tree" />
                    </td>
                    <td className="px-4">
                      <p className="ff_press text-white fs_lg">=</p>
                    </td>
                    <td className="px-3">
                      <img src={skull} alt="tree" />
                    </td>
                  </tr>
                  <tr className="mt-4">
                    <td>
                      <p className="ff_mono fs_md text-white fw-semibold">
                        Randomrats
                      </p>
                    </td>
                    <td className="px-4">
                      <p className="ff_press text-white fs_lg ">+</p>
                    </td>
                    <td className="px-4">
                      <img className="w-100" src={tree} alt="tree" />
                    </td>
                    <td className="px-4">
                      <p className="ff_press text-white fs_lg">=</p>
                    </td>
                    <td className="px-3">
                      <img src={rat} alt="tree" />
                    </td>
                  </tr>
                </table>
              </div>
              <div className="col-lg-3">
                <div className="d-flex flex-column pt-5 pt-lg-0">
                  <h4 className="text-white ff_press fs_md text-center mb-0">
                    FREE MINT
                  </h4>
                  <p className="ff_mono text-white fs_sm text-center mb-0">
                    First come First serve
                  </p>
                  <img className="pt-4" src={bigrat} alt="bigrat" />
                  <div className="d-flex align-items-center justify-content-center py-4">
                    <button className="fs_xsm ff_press radius_69 bg_pink px-4 py-3 text-white border-0">
                      Connect Wallet
                    </button>
                  </div>
                  <p className="ff_mono fs_sm text-center text-white fw-normal mb-0">
                    4000 / 5000 Minted
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </header>
    </>
  );
};

export default RandomRats;
