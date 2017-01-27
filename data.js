var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance-hall",
      "name": "Entrance Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -3.1103420339015493,
        "pitch": 0.1187211490910709,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.1269737240977467,
          "pitch": 0.2745572167855954,
          "rotation": 0,
          "target": "1-sitting-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-sitting-room",
      "name": "Sitting Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.5171565804813394,
        "pitch": 0.2664176153716742,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.6250277205843373,
          "pitch": 0.165978129103582,
          "rotation": 0,
          "target": "2-sun-lounge"
        },
        {
          "yaw": -2.7613137044703286,
          "pitch": 0.40739980526894826,
          "rotation": 0,
          "target": "0-entrance-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-sun-lounge",
      "name": "Sun Lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.9078552050628712,
        "pitch": 0.4532644578566778,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8412804612684184,
          "pitch": 0.13715038533644552,
          "rotation": 0,
          "target": "1-sitting-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Property Walkthrough (Sample)",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
