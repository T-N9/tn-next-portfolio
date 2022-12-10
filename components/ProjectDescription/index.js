import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import "css.gg/icons/css/chevron-right-r.css";

const ProjectDescription = (props) => {
  const {
    introduction,
    url,
    development,
    mockup,
    pandp,
    designing,
    mockup_d,
    palette,
    typo,
    logo,
    challenge,
    result,
    conclusion,
  } = props;

  const paletteList = palette?.map((item) => {
    let color = item.split(",");
    let code = color[0];
    let name = color[1];

    return (
      <div className="palette_item" key={name}>
        <div
          className="color_block"
          style={{ backgroundColor: `${code}` }}
        ></div>
        <p>{name}</p>
      </div>
    );
  });

  return (
    <section className="description">
      <div className="container_y_2 container_x_sm">
        <div className="description--introduction container_sm container_y_2">
          <h1 className="title_text">Introduction</h1>
          <div className="block_content">
            {introduction ? (
              <BlockContent blocks={introduction} />
            ) : (
              <p> Website is online but its case study is in process. </p>
            )}
          </div>
          <a href={url} target="_blank" rel="noreferrer">
            <button className="secondary_btn view_live_btn">
              View live
              <i className="gg-chevron-right-r"></i>
            </button>
          </a>
        </div>
      </div>

      {challenge && result && (
        <div className="container_x_sm container_y_1">
          <div className="container_sm description--challenge">
            <div className="item">
              <h3 className="ht_text">Challenge</h3>
              <div className="block_content">
                <BlockContent blocks={challenge} />
              </div>
            </div>
            <div className="item">
              <h3 className="ht_text">Result</h3>
              <div className="block_content">
                <BlockContent blocks={result} />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="container_x_sm container_y_1">
        <div className="description--development container_sm">
          {development && (
            <>
              <h1 className="title_text">Development</h1>
              <div className="block_content">
                <BlockContent blocks={development} />
              </div>
              {mockup && (
                <img className="mockup_img" src={mockup} alt="mockup" />
              )}
            </>
          )}
        </div>
      </div>

      {pandp && (
        <>
          <div className="container_x_sm">
            <div className="description--development container_sm">
              <h1 className="title_text">Preparation</h1>
              <div className="block_content">
                <BlockContent blocks={pandp} />
              </div>
            </div>
          </div>
        </>
      )}

      {designing && (
        <>
          <div className="container_x_sm container_y_2">
            <div className="description--development container_sm">
              <h1 className="title_text">Designing</h1>
              <div className="block_content">
                <BlockContent blocks={designing} />
              </div>

              <img className="mockup_img" src={mockup_d} alt="mockup" />
            </div>
            {paletteList && (
              <div className="container_sm container_y_1">
                <h1 className="title_text_1 text_center">Palette</h1>
                <div className="palette_wrapper">{paletteList}</div>
              </div>
            )}

            {typo && (
              <div className="container_sm no_pad_con container_y_1">
                <h1 className="title_text_1 text_center typo">Typo</h1>
                <img src={typo} alt="Typo" />
              </div>
            )}

            {logo && (
              <div className="container_sm no_pad_con container_y_1">
                <h1 className="title_text_1 text_center">Logo</h1>
                <img className="logo_img" src={logo} alt="logo" />
              </div>
            )}
          </div>
        </>
      )}

      <div className="container_x_sm">
        <div className="container_sm">
          <div className="separator"></div>
        </div>
      </div>
      {conclusion && (
        <>
          <div className="container_x_sm conclusion_div">
            <div className="description--development container_sm">
              <h1 className="title_text">Conclusion</h1>
              <div className="block_content">
                <BlockContent blocks={conclusion} />
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default ProjectDescription;
