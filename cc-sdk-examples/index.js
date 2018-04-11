const EXAMPLES = [
  {
    title: 'Getting Started',
    url: '1_getting_started.html',
    codeStr: `
    <head>
      <!-- Install default CarCode script in the head tag section -->
      <script src='https://dev-dsg11-www.carcodesms.com/widgets/s/[WIDGET_ID].js' type='text/javascript' async defer></script>
    </head>
    `,
  },{
    title: 'SDK buttons',
    url: '2_sdk_buttons.html',
    codeStr: `
    <head>
      <script>
        window.__carcode = {
          /* Do not attach default floating button to page */
          skipButton: true
        }
      </script>
      <!-- Install default CarCode script -->
      <script src='https://dev-dsg11-www.carcodesms.com/widgets/s/[WIDGET_ID].js' type='text/javascript' async defer></script>
    </head>
    <body>
      <!-- ... -->
      <!-- Add button(s) to VDPs (vehicle details page) or SRPs (vehicle search results pages) -->
      <button class="sms-button" data-widget="livechat">
        Chat
      </button>
      <button class="sms-button" data-widget="sms">
        Text us
      </button>
      <button class="sms-button" data-widget="facebook">
        Facebook
      </button>
      <!-- ... -->
    </body>
    `,
  },{
    title: 'SDK buttons in SPA',
    url: '2_spa_sdk_buttons.html',
    codeStr: `
    <head>
      <!-- Do not attach default floating button to page -->
      <script>
        window.__carcode = {
          skipButton: true
        }
      </script>
      <!-- Install default CarCode script -->
      <script src='https://dev-dsg11-www.carcodesms.com/widgets/s/[WIDGET_ID].js' type='text/javascript' async defer></script>
      <script src='spa_sdk_buttons.js' type='text/javascript' async defer></script>
    </head>
    <body>
     <div id="vehicles">
     </div>
    </body>
    `,
  },{
    title: 'Theme Configuration',
    url: '3_theme_configuration.html',
    codeStr: `
    <head>
      <!-- Load custom font -->
      <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
      <!-- Configure custom theme -->
      <script>
        window.__carcode = {
          themeConfiguration: {
            formBackgroundColor: '#f3f3f3',
            formLightBackgroundColor: '#ffffff',
            formLightColor: '#555',
            formTextColor: '#999999',
            separatorColor: '#e8ede8',
            backgroundButtonColor: '#007EE5',
            buttonColor: '#ffffff',
            fontSize: '16px',
            fontFamily: '\\'Roboto\\', \\'Open Sans\\', \\'Arial\\', \\'Helvetica\\', \\'sans-serif\\'',
            formButtonBackgroundColor: '#007EE5',
            dotColor: '#f3f3f3',
            formBoxShadow: 'rgba(85,85,85,0.5)',
            chatReplyMessageBackground: '#fff',
            chatMessageBackground: '#e3eaec',
            scrollBarColor: '#c1c1c1',
            scrollBarBackground: '#e9e9e9',
            inventoryPrimaryLightColor: '#999',
            inventoryPrimaryDarkColor: '#555',
          },
        };
      </script>
      <!-- Install default CarCode script -->
      <script src='https://dev-dsg11-www.carcodesms.com/widgets/s/[WIDGET_ID].js' type='text/javascript' async defer></script>
    </head>
    `,
  },{
    title: 'SMS Form',
    url: '4_sdk_configuration_sms.html',
    codeStr: `
    <script type='text/javascript'>
      window.__carcode = {
        /* Do not attach default floating button to page */
        skipButton: true,
        /* Skip widget menu and open directly SMS form by clicking SDK button */
        sdkWidget: 'sms',
        /* Do not try to open sms messenger on mobile phones */
        skipMobileApp: true,
        /* Disable all analytics */
        disableGoogleAnalytics: true,
        disableEdwAnalytics: true,
        disableGtmAnalytics: true,
        /* Open form even for mobile experience */
        alwaysOpenForm: true,
        /* Use 'bubble' canned messages in SMS form */
        cannedMessagesType: 'bubble',
        /* Use custom text for welcome message in SMS form */
        optOutText: 'You can opt-out by texting STOP',
      };
    </script>
    <!-- Install default CarCode script in the head tag section -->
    <script src='https://dev-dsg11-www.carcodesms.com/widgets/s/[WIDGET_ID].js' type='text/javascript' async defer></script>
    `,
  },{
    title: 'API usage',
    url: '5_sdk_api.html',
    codeStr: `
    <script>
      window.__carcode = {
       
      };
    </script>
    <!-- Install default CarCode script in the head tag section -->
    <script src='https://dev-dsg11-www.carcodesms.com/widgets/s/[WIDGET_ID].js' type='text/javascript' async defer></script>
    `,
  }
];

const updateExample = () => {
  const exampleIndex = location.hash ? location.hash.substr(1) : 0;
  const titleEl = document.getElementById('exampleTitle');
  const frameEl = document.getElementById('exampleFrame');
  const codeEl = document.getElementById('exampleCode');

  titleEl.innerHTML = EXAMPLES[exampleIndex].title;
  frameEl.src = `examples/${EXAMPLES[exampleIndex].url}`;
  codeEl.innerHTML = EXAMPLES[exampleIndex].codeStr.replace(/</g, '&lt;').replace(/>/g, '&gt;');

  hljs.highlightBlock(codeEl);
}
window.onload = updateExample;
window.onhashchange = updateExample;