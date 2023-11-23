// functions/proxy.js

exports.handler = async function (event, context) {
    try {
      const response = await fetch('https://www.facebook.com/plugins/customer_chat/SDK/?app_id=&attribution=biz_inbox&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df102557b6623a9c%26domain%3Dtenyain.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Ftenyain.com%252Ff3061f26f96e534%26relation%3Dparent.parent&container_width=523&current_url=https%3A%2F%2Ftenyain.com%2F&event_name=chat_plugin_sdk_icon_iframe_load&is_loaded_by_facade=true&loading_time=334&local_state=%7B%22v%22%3A2%2C%22path%22%3A2%2C%22chatState%22%3A1%2C%22visibility%22%3A%22hidden%22%2C%22showUpgradePrompt%22%3A%22not_shown%22%2C%22greetingVisibility%22%3A%22hidden%22%2C%22shouldShowLoginPage%22%3Afalse%7D&locale=en_US&log_id=140add1a-13c2-45cb-9fa5-87feac12a6bb&page_id=107118861736913&request_time=1700745821656&sdk=joey&suppress_http_code=1', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.json();
  
      return {
        statusCode: 200,
        body: JSON.stringify(data),
      };
    } catch (error) {
      console.error('Error fetching data:', error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Internal Server Error' }),
      };
    }
  };
  