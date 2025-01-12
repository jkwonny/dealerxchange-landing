/* eslint-disable @next/next/no-css-tags */
import React from 'react';

const MailchimpForm = () => {
  return (
    <div id="mc_embed_shell">
      <link
        href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
        rel="stylesheet"
        type="text/css"
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            #mc_embed_signup {
              background: #f9fcfb;
              clear: left;
              font: 14px Helvetica, Arial, sans-serif;
              width: 600px;
            }
          `,
        }}
      />
      <div id="mc_embed_signup">
        <form
          action="https://gmail.us12.list-manage.com/subscribe/post?u=d22ed1ba3c6e2bee39f0c2914&amp;id=dac25fd626&amp;f_id=00b6e7e0f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
        >
          <div id="mc_embed_signup_scroll">
            <div className="indicates-required">
              <span className="asterisk">*</span> indicates required
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">
                Email Address <span className="asterisk">*</span>
              </label>
              <input
                type="email"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                required
              />
            </div>
            <div id="mce-responses" className="clear foot">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: 'none' }}
              ></div>
              <div
                className="response"
                id="mce-success-response"
                style={{ display: 'none' }}
              ></div>
            </div>
            <div
              aria-hidden="true"
              style={{ position: 'absolute', left: '-5000px' }}
            >
              {/* Hidden input to prevent bot signups */}
              <input
                type="text"
                name="b_d22ed1ba3c6e2bee39f0c2914_dac25fd626"
                value=""
              />
            </div>
            <div className="optionalParent">
              <div className="clear foot">
                <input
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                  value="Subscribe"
                />
                <p style={{ margin: '0px auto' }}>
                  <a
                    href="http://eepurl.com/i7FzYw"
                    title="Mailchimp - email marketing made easy and fun"
                  >
                    <span
                      style={{
                        display: 'inline-block',
                        backgroundColor: 'transparent',
                        borderRadius: '4px',
                      }}
                    ></span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MailchimpForm;
