define({ "api": [
  {
    "type": "get",
    "url": "/users",
    "title": "Get user by ID",
    "name": "GetUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/users/users-router.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Get all users",
    "name": "GetUsers",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Users[]",
            "optional": false,
            "field": "users",
            "description": "<p>Array of users</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response:",
          "content": "HTTP/1.1 200 OK\n[\n{\n\"id\": 1,\n\"email\": \"rasha@rasha.dev\"\n},\n{\n\"id\": 1,\n\"email\": \"rasha@fastmail.com\"\n},\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api/users/users-router.js",
    "groupTitle": "Users"
  }
] });
