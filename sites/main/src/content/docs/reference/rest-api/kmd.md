---
title: KMD API
---

<!-- Generator: Widdershins v4.0.1 -->



> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

API for KMD (Key Management Daemon)

Base URLs:

* <a href="http://localhost/">http://localhost/</a>

Email: <a href="mailto:contact@algorand.com">Support</a> 


## Authentication

* API Key (api_key)
    - Parameter Name: **X-KMD-API-Token**, in: header. Generated header parameter. This value can be found in `/kmd/data/dir/kmd.token`. Example value: '330b2e4fc9b20f4f89812cf87f1dabeb716d23e3f11aec97a61ff5f750563b78'


## Default


### CreateWallet

<a id="opIdCreateWallet"></a>

> Code samples

```shell

curl -X POST http://localhost/v1/wallet \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-KMD-API-Token: API_KEY'

```

```http
POST http://localhost/v1/wallet HTTP/1.1
Host: localhost
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "master_derivation_key": [
    0
  ],
  "wallet_driver_name": "string",
  "wallet_name": "string",
  "wallet_password": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-KMD-API-Token':'API_KEY'
};

fetch('http://localhost/v1/wallet',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-KMD-API-Token' => 'API_KEY'
}

result = RestClient.post 'http://localhost/v1/wallet',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-KMD-API-Token': 'API_KEY'
}

r = requests.post('http://localhost/v1/wallet', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'X-KMD-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost/v1/wallet', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost/v1/wallet");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-KMD-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost/v1/wallet", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /v1/wallet`

*Create a wallet*

Create a new wallet (collection of keys) with the given parameters.

> Body parameter

```json
{
  "master_derivation_key": [
    0
  ],
  "wallet_driver_name": "string",
  "wallet_name": "string",
  "wallet_password": "string"
}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateWalletRequest](#schemacreatewalletrequest)|true|none|

> Example responses

> 200 Response

```json
{
  "error": true,
  "message": "string",
  "wallet": {
    "driver_name": "string",
    "driver_version": 0,
    "id": "string",
    "mnemonic_ux": true,
    "name": "string",
    "supported_txs": [
      "string"
    ]
  }
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response to `POST /v1/wallet`|[APIV1POSTWalletResponse](#schemaapiv1postwalletresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### DeleteKey

<a id="opIdDeleteKey"></a>

> Code samples

```shell

curl -X DELETE http://localhost/v1/key \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-KMD-API-Token: API_KEY'

```

```http
DELETE http://localhost/v1/key HTTP/1.1
Host: localhost
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "address": "string",
  "wallet_handle_token": "string",
  "wallet_password": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-KMD-API-Token':'API_KEY'
};

fetch('http://localhost/v1/key',
{
  method: 'DELETE',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-KMD-API-Token' => 'API_KEY'
}

result = RestClient.delete 'http://localhost/v1/key',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-KMD-API-Token': 'API_KEY'
}

r = requests.delete('http://localhost/v1/key', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'X-KMD-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','http://localhost/v1/key', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost/v1/key");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-KMD-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://localhost/v1/key", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /v1/key`

*Delete a key*

Deletes the key with the passed public key from the wallet.

> Body parameter

```json
{
  "address": "string",
  "wallet_handle_token": "string",
  "wallet_password": "string"
}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DeleteKeyRequest](#schemadeletekeyrequest)|true|none|

> Example responses

> 200 Response

```json
{
  "error": true,
  "message": "string"
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response to `DELETE /v1/key`|[APIV1DELETEKeyResponse](#schemaapiv1deletekeyresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### DeleteMultisig

<a id="opIdDeleteMultisig"></a>

> Code samples

```shell

curl -X DELETE http://localhost/v1/multisig \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-KMD-API-Token: API_KEY'

```

```http
DELETE http://localhost/v1/multisig HTTP/1.1
Host: localhost
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "address": "string",
  "wallet_handle_token": "string",
  "wallet_password": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-KMD-API-Token':'API_KEY'
};

fetch('http://localhost/v1/multisig',
{
  method: 'DELETE',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-KMD-API-Token' => 'API_KEY'
}

result = RestClient.delete 'http://localhost/v1/multisig',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-KMD-API-Token': 'API_KEY'
}

r = requests.delete('http://localhost/v1/multisig', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'X-KMD-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','http://localhost/v1/multisig', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost/v1/multisig");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-KMD-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://localhost/v1/multisig", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /v1/multisig`

*Delete a multisig*

Deletes multisig preimage information for the passed address from the wallet.

> Body parameter

```json
{
  "address": "string",
  "wallet_handle_token": "string",
  "wallet_password": "string"
}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DeleteMultisigRequest](#schemadeletemultisigrequest)|true|none|

> Example responses

> 200 Response

```json
{
  "error": true,
  "message": "string"
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response to POST /v1/multisig/delete|[APIV1DELETEMultisigResponse](#schemaapiv1deletemultisigresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### ExportKey

<a id="opIdExportKey"></a>

> Code samples

```shell

curl -X POST http://localhost/v1/key/export \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-KMD-API-Token: API_KEY'

```

```http
POST http://localhost/v1/key/export HTTP/1.1
Host: localhost
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "address": "string",
  "wallet_handle_token": "string",
  "wallet_password": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-KMD-API-Token':'API_KEY'
};

fetch('http://localhost/v1/key/export',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-KMD-API-Token' => 'API_KEY'
}

result = RestClient.post 'http://localhost/v1/key/export',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-KMD-API-Token': 'API_KEY'
}

r = requests.post('http://localhost/v1/key/export', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'X-KMD-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost/v1/key/export', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost/v1/key/export");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-KMD-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost/v1/key/export", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /v1/key/export`

*Export a key*

Export the secret key associated with the passed public key.

> Body parameter

```json
{
  "address": "string",
  "wallet_handle_token": "string",
  "wallet_password": "string"
}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ExportKeyRequest](#schemaexportkeyrequest)|true|none|

> Example responses

> 200 Response

```json
{
  "error": true,
  "message": "string",
  "private_key": [
    0
  ]
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response to `POST /v1/key/export`|[APIV1POSTKeyExportResponse](#schemaapiv1postkeyexportresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### ExportMasterKey

<a id="opIdExportMasterKey"></a>

> Code samples

```shell

curl -X POST http://localhost/v1/master-key/export \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-KMD-API-Token: API_KEY'

```

```http
POST http://localhost/v1/master-key/export HTTP/1.1
Host: localhost
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "wallet_handle_token": "string",
  "wallet_password": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-KMD-API-Token':'API_KEY'
};

fetch('http://localhost/v1/master-key/export',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-KMD-API-Token' => 'API_KEY'
}

result = RestClient.post 'http://localhost/v1/master-key/export',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-KMD-API-Token': 'API_KEY'
}

r = requests.post('http://localhost/v1/master-key/export', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'X-KMD-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost/v1/master-key/export', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost/v1/master-key/export");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-KMD-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost/v1/master-key/export", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /v1/master-key/export`

*Export the master derivation key from a wallet*

Export the master derivation key from the wallet. This key is a master "backup" key for the underlying wallet. With it, you can regenerate all of the wallets that have been generated with this wallet's `POST /v1/key` endpoint. This key will not allow you to recover keys imported from other wallets, however.

> Body parameter

```json
{
  "wallet_handle_token": "string",
  "wallet_password": "string"
}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ExportMasterKeyRequest](#schemaexportmasterkeyrequest)|true|none|

> Example responses

> 200 Response

```json
{
  "error": true,
  "master_derivation_key": [
    0
  ],
  "message": "string"
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response to `POST /v1/master-key/export`|[APIV1POSTMasterKeyExportResponse](#schemaapiv1postmasterkeyexportresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### ExportMultisig

<a id="opIdExportMultisig"></a>

> Code samples

```shell

curl -X POST http://localhost/v1/multisig/export \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-KMD-API-Token: API_KEY'

```

```http
POST http://localhost/v1/multisig/export HTTP/1.1
Host: localhost
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "address": "string",
  "wallet_handle_token": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-KMD-API-Token':'API_KEY'
};

fetch('http://localhost/v1/multisig/export',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-KMD-API-Token' => 'API_KEY'
}

result = RestClient.post 'http://localhost/v1/multisig/export',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-KMD-API-Token': 'API_KEY'
}

r = requests.post('http://localhost/v1/multisig/export', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'X-KMD-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost/v1/multisig/export', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost/v1/multisig/export");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-KMD-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost/v1/multisig/export", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /v1/multisig/export`

*Export multisig address metadata*

Given a multisig address whose preimage this wallet stores, returns the information used to generate the address, including public keys, threshold, and multisig version.

> Body parameter

```json
{
  "address": "string",
  "wallet_handle_token": "string"
}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ExportMultisigRequest](#schemaexportmultisigrequest)|true|none|

> Example responses

> 200 Response

```json
{
  "error": true,
  "message": "string",
  "multisig_version": 0,
  "pks": [
    [
      0
    ]
  ],
  "threshold": 0
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response to `POST /v1/multisig/export`|[APIV1POSTMultisigExportResponse](#schemaapiv1postmultisigexportresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### GenerateKey

<a id="opIdGenerateKey"></a>

> Code samples

```shell

curl -X POST http://localhost/v1/key \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-KMD-API-Token: API_KEY'

```

```http
POST http://localhost/v1/key HTTP/1.1
Host: localhost
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "display_mnemonic": true,
  "wallet_handle_token": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-KMD-API-Token':'API_KEY'
};

fetch('http://localhost/v1/key',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-KMD-API-Token' => 'API_KEY'
}

result = RestClient.post 'http://localhost/v1/key',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-KMD-API-Token': 'API_KEY'
}

r = requests.post('http://localhost/v1/key', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'X-KMD-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost/v1/key', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost/v1/key");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-KMD-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost/v1/key", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /v1/key`

*Generate a key*

Generates the next key in the deterministic key sequence (as determined by the master derivation key) and adds it to the wallet, returning the public key.

> Body parameter

```json
{
  "display_mnemonic": true,
  "wallet_handle_token": "string"
}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GenerateKeyRequest](#schemageneratekeyrequest)|true|none|

> Example responses

> 200 Response

```json
{
  "address": "string",
  "error": true,
  "message": "string"
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response to `POST /v1/key`|[APIV1POSTKeyResponse](#schemaapiv1postkeyresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### GetVersion

<a id="opIdGetVersion"></a>

> Code samples

```shell

curl -X GET http://localhost/versions \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-KMD-API-Token: API_KEY'

```

```http
GET http://localhost/versions HTTP/1.1
Host: localhost
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-KMD-API-Token':'API_KEY'
};

fetch('http://localhost/versions',
{
  method: 'GET',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-KMD-API-Token' => 'API_KEY'
}

result = RestClient.get 'http://localhost/versions',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-KMD-API-Token': 'API_KEY'
}

r = requests.get('http://localhost/versions', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'X-KMD-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost/versions', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost/versions");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-KMD-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost/versions", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /versions`

*Retrieves the current version*

> Body parameter

```json
{}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[VersionsRequest](#schemaversionsrequest)|false|none|

> Example responses

> 200 Response

```json
{
  "versions": [
    "string"
  ]
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response to `GET /versions`|[VersionsResponse](#schemaversionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### GetWalletInfo

<a id="opIdGetWalletInfo"></a>

> Code samples

```shell

curl -X POST http://localhost/v1/wallet/info \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-KMD-API-Token: API_KEY'

```

```http
POST http://localhost/v1/wallet/info HTTP/1.1
Host: localhost
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "wallet_handle_token": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-KMD-API-Token':'API_KEY'
};

fetch('http://localhost/v1/wallet/info',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-KMD-API-Token' => 'API_KEY'
}

result = RestClient.post 'http://localhost/v1/wallet/info',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-KMD-API-Token': 'API_KEY'
}

r = requests.post('http://localhost/v1/wallet/info', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'X-KMD-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost/v1/wallet/info', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost/v1/wallet/info");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-KMD-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost/v1/wallet/info", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /v1/wallet/info`

*Get wallet info*

Returns information about the wallet associated with the passed wallet handle token. Additionally returns expiration information about the token itself.

> Body parameter

```json
{
  "wallet_handle_token": "string"
}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WalletInfoRequest](#schemawalletinforequest)|true|none|

> Example responses

> 200 Response

```json
{
  "error": true,
  "message": "string",
  "wallet_handle": {
    "expires_seconds": 0,
    "wallet": {
      "driver_name": "string",
      "driver_version": 0,
      "id": "string",
      "mnemonic_ux": true,
      "name": "string",
      "supported_txs": [
        "string"
      ]
    }
  }
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response to `POST /v1/wallet/info`|[APIV1POSTWalletInfoResponse](#schemaapiv1postwalletinforesponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### ImportKey

<a id="opIdImportKey"></a>

> Code samples

```shell

curl -X POST http://localhost/v1/key/import \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-KMD-API-Token: API_KEY'

```

```http
POST http://localhost/v1/key/import HTTP/1.1
Host: localhost
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "private_key": [
    0
  ],
  "wallet_handle_token": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-KMD-API-Token':'API_KEY'
};

fetch('http://localhost/v1/key/import',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-KMD-API-Token' => 'API_KEY'
}

result = RestClient.post 'http://localhost/v1/key/import',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-KMD-API-Token': 'API_KEY'
}

r = requests.post('http://localhost/v1/key/import', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'X-KMD-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost/v1/key/import', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost/v1/key/import");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-KMD-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost/v1/key/import", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /v1/key/import`

*Import a key*

Import an externally generated key into the wallet. Note that if you wish to back up the imported key, you must do so by backing up the entire wallet database, because imported keys were not derived from the wallet's master derivation key.

> Body parameter

```json
{
  "private_key": [
    0
  ],
  "wallet_handle_token": "string"
}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ImportKeyRequest](#schemaimportkeyrequest)|true|none|

> Example responses

> 200 Response

```json
{
  "address": "string",
  "error": true,
  "message": "string"
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response to `POST /v1/key/import`|[APIV1POSTKeyImportResponse](#schemaapiv1postkeyimportresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### ImportMultisig

<a id="opIdImportMultisig"></a>

> Code samples

```shell

curl -X POST http://localhost/v1/multisig/import \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-KMD-API-Token: API_KEY'

```

```http
POST http://localhost/v1/multisig/import HTTP/1.1
Host: localhost
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "multisig_version": 0,
  "pks": [
    [
      0
    ]
  ],
  "threshold": 0,
  "wallet_handle_token": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-KMD-API-Token':'API_KEY'
};

fetch('http://localhost/v1/multisig/import',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-KMD-API-Token' => 'API_KEY'
}

result = RestClient.post 'http://localhost/v1/multisig/import',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-KMD-API-Token': 'API_KEY'
}

r = requests.post('http://localhost/v1/multisig/import', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'X-KMD-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost/v1/multisig/import', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost/v1/multisig/import");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-KMD-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost/v1/multisig/import", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /v1/multisig/import`

*Import a multisig account*

Generates a multisig account from the passed public keys array and multisig metadata, and stores all of this in the wallet.

> Body parameter

```json
{
  "multisig_version": 0,
  "pks": [
    [
      0
    ]
  ],
  "threshold": 0,
  "wallet_handle_token": "string"
}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ImportMultisigRequest](#schemaimportmultisigrequest)|true|none|

> Example responses

> 200 Response

```json
{
  "address": "string",
  "error": true,
  "message": "string"
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response to `POST /v1/multisig/import`|[APIV1POSTMultisigImportResponse](#schemaapiv1postmultisigimportresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### InitWalletHandleToken

<a id="opIdInitWalletHandleToken"></a>

> Code samples

```shell

curl -X POST http://localhost/v1/wallet/init \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-KMD-API-Token: API_KEY'

```

```http
POST http://localhost/v1/wallet/init HTTP/1.1
Host: localhost
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "wallet_id": "string",
  "wallet_password": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-KMD-API-Token':'API_KEY'
};

fetch('http://localhost/v1/wallet/init',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-KMD-API-Token' => 'API_KEY'
}

result = RestClient.post 'http://localhost/v1/wallet/init',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-KMD-API-Token': 'API_KEY'
}

r = requests.post('http://localhost/v1/wallet/init', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'X-KMD-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost/v1/wallet/init', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost/v1/wallet/init");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-KMD-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost/v1/wallet/init", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /v1/wallet/init`

*Initialize a wallet handle token*

Unlock the wallet and return a wallet handle token that can be used for subsequent operations. These tokens expire periodically and must be renewed. You can `POST` the token to `/v1/wallet/info` to see how much time remains until expiration, and renew it with `/v1/wallet/renew`. When you're done, you can invalidate the token with `/v1/wallet/release`.

> Body parameter

```json
{
  "wallet_id": "string",
  "wallet_password": "string"
}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[InitWalletHandleTokenRequest](#schemainitwallethandletokenrequest)|true|none|

> Example responses

> 200 Response

```json
{
  "error": true,
  "message": "string",
  "wallet_handle_token": "string"
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response to `POST /v1/wallet/init`|[APIV1POSTWalletInitResponse](#schemaapiv1postwalletinitresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### ListKeysInWallet

<a id="opIdListKeysInWallet"></a>

> Code samples

```shell

curl -X POST http://localhost/v1/key/list \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-KMD-API-Token: API_KEY'

```

```http
POST http://localhost/v1/key/list HTTP/1.1
Host: localhost
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "wallet_handle_token": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-KMD-API-Token':'API_KEY'
};

fetch('http://localhost/v1/key/list',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-KMD-API-Token' => 'API_KEY'
}

result = RestClient.post 'http://localhost/v1/key/list',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-KMD-API-Token': 'API_KEY'
}

r = requests.post('http://localhost/v1/key/list', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'X-KMD-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost/v1/key/list', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost/v1/key/list");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-KMD-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost/v1/key/list", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /v1/key/list`

*List keys in wallet*

Lists all of the public keys in this wallet. All of them have a stored private key.

> Body parameter

```json
{
  "wallet_handle_token": "string"
}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ListKeysRequest](#schemalistkeysrequest)|true|none|

> Example responses

> 200 Response

```json
{
  "addresses": [
    "string"
  ],
  "error": true,
  "message": "string"
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response to `POST /v1/key/list`|[APIV1POSTKeyListResponse](#schemaapiv1postkeylistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### ListMultisg

<a id="opIdListMultisg"></a>

> Code samples

```shell

curl -X POST http://localhost/v1/multisig/list \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-KMD-API-Token: API_KEY'

```

```http
POST http://localhost/v1/multisig/list HTTP/1.1
Host: localhost
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "wallet_handle_token": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-KMD-API-Token':'API_KEY'
};

fetch('http://localhost/v1/multisig/list',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-KMD-API-Token' => 'API_KEY'
}

result = RestClient.post 'http://localhost/v1/multisig/list',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-KMD-API-Token': 'API_KEY'
}

r = requests.post('http://localhost/v1/multisig/list', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'X-KMD-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost/v1/multisig/list', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost/v1/multisig/list");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-KMD-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost/v1/multisig/list", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /v1/multisig/list`

*List multisig accounts*

Lists all of the multisig accounts whose preimages this wallet stores

> Body parameter

```json
{
  "wallet_handle_token": "string"
}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ListMultisigRequest](#schemalistmultisigrequest)|true|none|

> Example responses

> 200 Response

```json
{
  "addresses": [
    "string"
  ],
  "error": true,
  "message": "string"
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response to `POST /v1/multisig/list`|[APIV1POSTMultisigListResponse](#schemaapiv1postmultisiglistresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### ListWallets

<a id="opIdListWallets"></a>

> Code samples

```shell

curl -X GET http://localhost/v1/wallets \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-KMD-API-Token: API_KEY'

```

```http
GET http://localhost/v1/wallets HTTP/1.1
Host: localhost
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-KMD-API-Token':'API_KEY'
};

fetch('http://localhost/v1/wallets',
{
  method: 'GET',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-KMD-API-Token' => 'API_KEY'
}

result = RestClient.get 'http://localhost/v1/wallets',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-KMD-API-Token': 'API_KEY'
}

r = requests.get('http://localhost/v1/wallets', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'X-KMD-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost/v1/wallets', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost/v1/wallets");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-KMD-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost/v1/wallets", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /v1/wallets`

*List wallets*

Lists all of the wallets that kmd is aware of.

> Body parameter

```json
{}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ListWalletsRequest](#schemalistwalletsrequest)|false|none|

> Example responses

> 200 Response

```json
{
  "error": true,
  "message": "string",
  "wallets": [
    {
      "driver_name": "string",
      "driver_version": 0,
      "id": "string",
      "mnemonic_ux": true,
      "name": "string",
      "supported_txs": [
        "string"
      ]
    }
  ]
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response to `GET /v1/wallets`|[APIV1GETWalletsResponse](#schemaapiv1getwalletsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### ReleaseWalletHandleToken

<a id="opIdReleaseWalletHandleToken"></a>

> Code samples

```shell

curl -X POST http://localhost/v1/wallet/release \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-KMD-API-Token: API_KEY'

```

```http
POST http://localhost/v1/wallet/release HTTP/1.1
Host: localhost
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "wallet_handle_token": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-KMD-API-Token':'API_KEY'
};

fetch('http://localhost/v1/wallet/release',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-KMD-API-Token' => 'API_KEY'
}

result = RestClient.post 'http://localhost/v1/wallet/release',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-KMD-API-Token': 'API_KEY'
}

r = requests.post('http://localhost/v1/wallet/release', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'X-KMD-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost/v1/wallet/release', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost/v1/wallet/release");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-KMD-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost/v1/wallet/release", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /v1/wallet/release`

*Release a wallet handle token*

Invalidate the passed wallet handle token, making it invalid for use in subsequent requests.

> Body parameter

```json
{
  "wallet_handle_token": "string"
}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ReleaseWalletHandleTokenRequest](#schemareleasewallethandletokenrequest)|true|none|

> Example responses

> 200 Response

```json
{
  "error": true,
  "message": "string"
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response to `POST /v1/wallet/release`|[APIV1POSTWalletReleaseResponse](#schemaapiv1postwalletreleaseresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### RenameWallet

<a id="opIdRenameWallet"></a>

> Code samples

```shell

curl -X POST http://localhost/v1/wallet/rename \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-KMD-API-Token: API_KEY'

```

```http
POST http://localhost/v1/wallet/rename HTTP/1.1
Host: localhost
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "wallet_id": "string",
  "wallet_name": "string",
  "wallet_password": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-KMD-API-Token':'API_KEY'
};

fetch('http://localhost/v1/wallet/rename',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-KMD-API-Token' => 'API_KEY'
}

result = RestClient.post 'http://localhost/v1/wallet/rename',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-KMD-API-Token': 'API_KEY'
}

r = requests.post('http://localhost/v1/wallet/rename', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'X-KMD-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost/v1/wallet/rename', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost/v1/wallet/rename");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-KMD-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost/v1/wallet/rename", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /v1/wallet/rename`

*Rename a wallet*

Rename the underlying wallet to something else

> Body parameter

```json
{
  "wallet_id": "string",
  "wallet_name": "string",
  "wallet_password": "string"
}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RenameWalletRequest](#schemarenamewalletrequest)|true|none|

> Example responses

> 200 Response

```json
{
  "error": true,
  "message": "string",
  "wallet": {
    "driver_name": "string",
    "driver_version": 0,
    "id": "string",
    "mnemonic_ux": true,
    "name": "string",
    "supported_txs": [
      "string"
    ]
  }
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response to `POST /v1/wallet/rename`|[APIV1POSTWalletRenameResponse](#schemaapiv1postwalletrenameresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### RenewWalletHandleToken

<a id="opIdRenewWalletHandleToken"></a>

> Code samples

```shell

curl -X POST http://localhost/v1/wallet/renew \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-KMD-API-Token: API_KEY'

```

```http
POST http://localhost/v1/wallet/renew HTTP/1.1
Host: localhost
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "wallet_handle_token": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-KMD-API-Token':'API_KEY'
};

fetch('http://localhost/v1/wallet/renew',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-KMD-API-Token' => 'API_KEY'
}

result = RestClient.post 'http://localhost/v1/wallet/renew',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-KMD-API-Token': 'API_KEY'
}

r = requests.post('http://localhost/v1/wallet/renew', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'X-KMD-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost/v1/wallet/renew', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost/v1/wallet/renew");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-KMD-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost/v1/wallet/renew", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /v1/wallet/renew`

*Renew a wallet handle token*

Renew a wallet handle token, increasing its expiration duration to its initial value

> Body parameter

```json
{
  "wallet_handle_token": "string"
}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RenewWalletHandleTokenRequest](#schemarenewwallethandletokenrequest)|true|none|

> Example responses

> 200 Response

```json
{
  "error": true,
  "message": "string",
  "wallet_handle": {
    "expires_seconds": 0,
    "wallet": {
      "driver_name": "string",
      "driver_version": 0,
      "id": "string",
      "mnemonic_ux": true,
      "name": "string",
      "supported_txs": [
        "string"
      ]
    }
  }
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response `POST /v1/wallet/renew`|[APIV1POSTWalletRenewResponse](#schemaapiv1postwalletrenewresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### SignMultisigProgram

<a id="opIdSignMultisigProgram"></a>

> Code samples

```shell

curl -X POST http://localhost/v1/multisig/signprogram \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-KMD-API-Token: API_KEY'

```

```http
POST http://localhost/v1/multisig/signprogram HTTP/1.1
Host: localhost
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "address": "string",
  "data": "string",
  "partial_multisig": {
    "Subsigs": [
      {
        "Key": [
          0
        ],
        "Sig": [
          0
        ]
      }
    ],
    "Threshold": 0,
    "Version": 0
  },
  "public_key": [
    0
  ],
  "wallet_handle_token": "string",
  "wallet_password": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-KMD-API-Token':'API_KEY'
};

fetch('http://localhost/v1/multisig/signprogram',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-KMD-API-Token' => 'API_KEY'
}

result = RestClient.post 'http://localhost/v1/multisig/signprogram',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-KMD-API-Token': 'API_KEY'
}

r = requests.post('http://localhost/v1/multisig/signprogram', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'X-KMD-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost/v1/multisig/signprogram', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost/v1/multisig/signprogram");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-KMD-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost/v1/multisig/signprogram", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /v1/multisig/signprogram`

*Sign a program for a multisig account*

Start a multisig signature, or add a signature to a partially completed multisig signature object.

> Body parameter

```json
{
  "address": "string",
  "data": "string",
  "partial_multisig": {
    "Subsigs": [
      {
        "Key": [
          0
        ],
        "Sig": [
          0
        ]
      }
    ],
    "Threshold": 0,
    "Version": 0
  },
  "public_key": [
    0
  ],
  "wallet_handle_token": "string",
  "wallet_password": "string"
}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SignProgramMultisigRequest](#schemasignprogrammultisigrequest)|true|none|

> Example responses

> 200 Response

```json
{
  "error": true,
  "message": "string",
  "multisig": "string"
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response to `POST /v1/multisig/signdata`|[APIV1POSTMultisigProgramSignResponse](#schemaapiv1postmultisigprogramsignresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### SignMultisigTransaction

<a id="opIdSignMultisigTransaction"></a>

> Code samples

```shell

curl -X POST http://localhost/v1/multisig/sign \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-KMD-API-Token: API_KEY'

```

```http
POST http://localhost/v1/multisig/sign HTTP/1.1
Host: localhost
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "partial_multisig": {
    "Subsigs": [
      {
        "Key": [
          0
        ],
        "Sig": [
          0
        ]
      }
    ],
    "Threshold": 0,
    "Version": 0
  },
  "public_key": [
    0
  ],
  "signer": [
    0
  ],
  "transaction": "string",
  "wallet_handle_token": "string",
  "wallet_password": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-KMD-API-Token':'API_KEY'
};

fetch('http://localhost/v1/multisig/sign',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-KMD-API-Token' => 'API_KEY'
}

result = RestClient.post 'http://localhost/v1/multisig/sign',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-KMD-API-Token': 'API_KEY'
}

r = requests.post('http://localhost/v1/multisig/sign', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'X-KMD-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost/v1/multisig/sign', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost/v1/multisig/sign");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-KMD-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost/v1/multisig/sign", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /v1/multisig/sign`

*Sign a multisig transaction*

Start a multisig signature, or add a signature to a partially completed multisig signature object.

> Body parameter

```json
{
  "partial_multisig": {
    "Subsigs": [
      {
        "Key": [
          0
        ],
        "Sig": [
          0
        ]
      }
    ],
    "Threshold": 0,
    "Version": 0
  },
  "public_key": [
    0
  ],
  "signer": [
    0
  ],
  "transaction": "string",
  "wallet_handle_token": "string",
  "wallet_password": "string"
}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SignMultisigRequest](#schemasignmultisigrequest)|true|none|

> Example responses

> 200 Response

```json
{
  "error": true,
  "message": "string",
  "multisig": "string"
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response to `POST /v1/multisig/sign`|[APIV1POSTMultisigTransactionSignResponse](#schemaapiv1postmultisigtransactionsignresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### SignProgram

<a id="opIdSignProgram"></a>

> Code samples

```shell

curl -X POST http://localhost/v1/program/sign \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-KMD-API-Token: API_KEY'

```

```http
POST http://localhost/v1/program/sign HTTP/1.1
Host: localhost
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "address": "string",
  "data": "string",
  "wallet_handle_token": "string",
  "wallet_password": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-KMD-API-Token':'API_KEY'
};

fetch('http://localhost/v1/program/sign',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-KMD-API-Token' => 'API_KEY'
}

result = RestClient.post 'http://localhost/v1/program/sign',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-KMD-API-Token': 'API_KEY'
}

r = requests.post('http://localhost/v1/program/sign', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'X-KMD-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost/v1/program/sign', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost/v1/program/sign");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-KMD-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost/v1/program/sign", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /v1/program/sign`

*Sign program*

Signs the passed program with a key from the wallet, determined by the account named in the request.

> Body parameter

```json
{
  "address": "string",
  "data": "string",
  "wallet_handle_token": "string",
  "wallet_password": "string"
}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SignProgramRequest](#schemasignprogramrequest)|true|none|

> Example responses

> 200 Response

```json
{
  "error": true,
  "message": "string",
  "sig": "string"
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response to `POST /v1/data/sign`|[APIV1POSTProgramSignResponse](#schemaapiv1postprogramsignresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### SignTransaction

<a id="opIdSignTransaction"></a>

> Code samples

```shell

curl -X POST http://localhost/v1/transaction/sign \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-KMD-API-Token: API_KEY'

```

```http
POST http://localhost/v1/transaction/sign HTTP/1.1
Host: localhost
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "public_key": [
    0
  ],
  "transaction": "string",
  "wallet_handle_token": "string",
  "wallet_password": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'X-KMD-API-Token':'API_KEY'
};

fetch('http://localhost/v1/transaction/sign',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'X-KMD-API-Token' => 'API_KEY'
}

result = RestClient.post 'http://localhost/v1/transaction/sign',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-KMD-API-Token': 'API_KEY'
}

r = requests.post('http://localhost/v1/transaction/sign', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'X-KMD-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://localhost/v1/transaction/sign', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost/v1/transaction/sign");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "X-KMD-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://localhost/v1/transaction/sign", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /v1/transaction/sign`

*Sign a transaction*

Signs the passed transaction with a key from the wallet, determined by the sender encoded in the transaction.

> Body parameter

```json
{
  "public_key": [
    0
  ],
  "transaction": "string",
  "wallet_handle_token": "string",
  "wallet_password": "string"
}
```

#### Parameters

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SignTransactionRequest](#schemasigntransactionrequest)|true|none|

> Example responses

> 200 Response

```json
{
  "error": true,
  "message": "string",
  "signed_transaction": "string"
}
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Response to `POST /v1/transaction/sign`|[APIV1POSTTransactionSignResponse](#schemaapiv1posttransactionsignresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


### SwaggerHandler

<a id="opIdSwaggerHandler"></a>

> Code samples

```shell

curl -X GET http://localhost/swagger.json \
  -H 'Accept: application/json' \
  -H 'X-KMD-API-Token: API_KEY'

```

```http
GET http://localhost/swagger.json HTTP/1.1
Host: localhost
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'X-KMD-API-Token':'API_KEY'
};

fetch('http://localhost/swagger.json',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'X-KMD-API-Token' => 'API_KEY'
}

result = RestClient.get 'http://localhost/swagger.json',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'X-KMD-API-Token': 'API_KEY'
}

r = requests.get('http://localhost/swagger.json', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'X-KMD-API-Token' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost/swagger.json', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost/swagger.json");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "X-KMD-API-Token": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost/swagger.json", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /swagger.json`

*Gets the current swagger spec.*

Returns the entire swagger spec in json.

> Example responses

> 200 Response

```json
"string"
```

#### Responses

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|The current swagger spec|string|
|default|Default|Unknown Error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>


## Schemas


### APIV1DELETEKeyResponse
<!-- backwards compatibility -->
<a id="schemaapiv1deletekeyresponse"></a>
<a id="schema_APIV1DELETEKeyResponse"></a>
<a id="tocSapiv1deletekeyresponse"></a>
<a id="tocsapiv1deletekeyresponse"></a>

```json
{
  "error": true,
  "message": "string"
}

```

APIV1DELETEKeyResponse is the response to `DELETE /v1/key`
friendly:DeleteKeyResponse

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|boolean|false|none|none|
|message|string|false|none|none|


### APIV1DELETEMultisigResponse
<!-- backwards compatibility -->
<a id="schemaapiv1deletemultisigresponse"></a>
<a id="schema_APIV1DELETEMultisigResponse"></a>
<a id="tocSapiv1deletemultisigresponse"></a>
<a id="tocsapiv1deletemultisigresponse"></a>

```json
{
  "error": true,
  "message": "string"
}

```

APIV1DELETEMultisigResponse is the response to POST /v1/multisig/delete`
friendly:DeleteMultisigResponse

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|boolean|false|none|none|
|message|string|false|none|none|


### APIV1GETWalletsResponse
<!-- backwards compatibility -->
<a id="schemaapiv1getwalletsresponse"></a>
<a id="schema_APIV1GETWalletsResponse"></a>
<a id="tocSapiv1getwalletsresponse"></a>
<a id="tocsapiv1getwalletsresponse"></a>

```json
{
  "error": true,
  "message": "string",
  "wallets": [
    {
      "driver_name": "string",
      "driver_version": 0,
      "id": "string",
      "mnemonic_ux": true,
      "name": "string",
      "supported_txs": [
        "string"
      ]
    }
  ]
}

```

APIV1GETWalletsResponse is the response to `GET /v1/wallets`
friendly:ListWalletsResponse

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|boolean|false|none|none|
|message|string|false|none|none|
|wallets|[[APIV1Wallet](#schemaapiv1wallet)]|false|none|[APIV1Wallet is the API's representation of a wallet]|


### APIV1POSTKeyExportResponse
<!-- backwards compatibility -->
<a id="schemaapiv1postkeyexportresponse"></a>
<a id="schema_APIV1POSTKeyExportResponse"></a>
<a id="tocSapiv1postkeyexportresponse"></a>
<a id="tocsapiv1postkeyexportresponse"></a>

```json
{
  "error": true,
  "message": "string",
  "private_key": [
    0
  ]
}

```

APIV1POSTKeyExportResponse is the response to `POST /v1/key/export`
friendly:ExportKeyResponse

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|boolean|false|none|none|
|message|string|false|none|none|
|private_key|[PrivateKey](#schemaprivatekey)|false|none|none|


### APIV1POSTKeyImportResponse
<!-- backwards compatibility -->
<a id="schemaapiv1postkeyimportresponse"></a>
<a id="schema_APIV1POSTKeyImportResponse"></a>
<a id="tocSapiv1postkeyimportresponse"></a>
<a id="tocsapiv1postkeyimportresponse"></a>

```json
{
  "address": "string",
  "error": true,
  "message": "string"
}

```

APIV1POSTKeyImportResponse is the response to `POST /v1/key/import`
friendly:ImportKeyResponse

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|none|
|error|boolean|false|none|none|
|message|string|false|none|none|


### APIV1POSTKeyListResponse
<!-- backwards compatibility -->
<a id="schemaapiv1postkeylistresponse"></a>
<a id="schema_APIV1POSTKeyListResponse"></a>
<a id="tocSapiv1postkeylistresponse"></a>
<a id="tocsapiv1postkeylistresponse"></a>

```json
{
  "addresses": [
    "string"
  ],
  "error": true,
  "message": "string"
}

```

APIV1POSTKeyListResponse is the response to `POST /v1/key/list`
friendly:ListKeysResponse

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addresses|[string]|false|none|none|
|error|boolean|false|none|none|
|message|string|false|none|none|


### APIV1POSTKeyResponse
<!-- backwards compatibility -->
<a id="schemaapiv1postkeyresponse"></a>
<a id="schema_APIV1POSTKeyResponse"></a>
<a id="tocSapiv1postkeyresponse"></a>
<a id="tocsapiv1postkeyresponse"></a>

```json
{
  "address": "string",
  "error": true,
  "message": "string"
}

```

APIV1POSTKeyResponse is the response to `POST /v1/key`
friendly:GenerateKeyResponse

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|none|
|error|boolean|false|none|none|
|message|string|false|none|none|


### APIV1POSTMasterKeyExportResponse
<!-- backwards compatibility -->
<a id="schemaapiv1postmasterkeyexportresponse"></a>
<a id="schema_APIV1POSTMasterKeyExportResponse"></a>
<a id="tocSapiv1postmasterkeyexportresponse"></a>
<a id="tocsapiv1postmasterkeyexportresponse"></a>

```json
{
  "error": true,
  "master_derivation_key": [
    0
  ],
  "message": "string"
}

```

APIV1POSTMasterKeyExportResponse is the response to `POST /v1/master-key/export`
friendly:ExportMasterKeyResponse

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|boolean|false|none|none|
|master_derivation_key|[MasterDerivationKey](#schemamasterderivationkey)|false|none|MasterDerivationKey is used to derive ed25519 keys for use in wallets|
|message|string|false|none|none|


### APIV1POSTMultisigExportResponse
<!-- backwards compatibility -->
<a id="schemaapiv1postmultisigexportresponse"></a>
<a id="schema_APIV1POSTMultisigExportResponse"></a>
<a id="tocSapiv1postmultisigexportresponse"></a>
<a id="tocsapiv1postmultisigexportresponse"></a>

```json
{
  "error": true,
  "message": "string",
  "multisig_version": 0,
  "pks": [
    [
      0
    ]
  ],
  "threshold": 0
}

```

APIV1POSTMultisigExportResponse is the response to `POST /v1/multisig/export`
friendly:ExportMultisigResponse

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|boolean|false|none|none|
|message|string|false|none|none|
|multisig_version|integer(uint8)|false|none|none|
|pks|[[PublicKey](#schemapublickey)]|false|none|none|
|threshold|integer(uint8)|false|none|none|


### APIV1POSTMultisigImportResponse
<!-- backwards compatibility -->
<a id="schemaapiv1postmultisigimportresponse"></a>
<a id="schema_APIV1POSTMultisigImportResponse"></a>
<a id="tocSapiv1postmultisigimportresponse"></a>
<a id="tocsapiv1postmultisigimportresponse"></a>

```json
{
  "address": "string",
  "error": true,
  "message": "string"
}

```

APIV1POSTMultisigImportResponse is the response to `POST /v1/multisig/import`
friendly:ImportMultisigResponse

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|none|
|error|boolean|false|none|none|
|message|string|false|none|none|


### APIV1POSTMultisigListResponse
<!-- backwards compatibility -->
<a id="schemaapiv1postmultisiglistresponse"></a>
<a id="schema_APIV1POSTMultisigListResponse"></a>
<a id="tocSapiv1postmultisiglistresponse"></a>
<a id="tocsapiv1postmultisiglistresponse"></a>

```json
{
  "addresses": [
    "string"
  ],
  "error": true,
  "message": "string"
}

```

APIV1POSTMultisigListResponse is the response to `POST /v1/multisig/list`
friendly:ListMultisigResponse

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addresses|[string]|false|none|none|
|error|boolean|false|none|none|
|message|string|false|none|none|


### APIV1POSTMultisigProgramSignResponse
<!-- backwards compatibility -->
<a id="schemaapiv1postmultisigprogramsignresponse"></a>
<a id="schema_APIV1POSTMultisigProgramSignResponse"></a>
<a id="tocSapiv1postmultisigprogramsignresponse"></a>
<a id="tocsapiv1postmultisigprogramsignresponse"></a>

```json
{
  "error": true,
  "message": "string",
  "multisig": "string"
}

```

APIV1POSTMultisigProgramSignResponse is the response to `POST /v1/multisig/signdata`
friendly:SignProgramMultisigResponse

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|boolean|false|none|none|
|message|string|false|none|none|
|multisig|string(byte)|false|none|none|


### APIV1POSTMultisigTransactionSignResponse
<!-- backwards compatibility -->
<a id="schemaapiv1postmultisigtransactionsignresponse"></a>
<a id="schema_APIV1POSTMultisigTransactionSignResponse"></a>
<a id="tocSapiv1postmultisigtransactionsignresponse"></a>
<a id="tocsapiv1postmultisigtransactionsignresponse"></a>

```json
{
  "error": true,
  "message": "string",
  "multisig": "string"
}

```

APIV1POSTMultisigTransactionSignResponse is the response to `POST /v1/multisig/sign`
friendly:SignMultisigResponse

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|boolean|false|none|none|
|message|string|false|none|none|
|multisig|string(byte)|false|none|none|


### APIV1POSTProgramSignResponse
<!-- backwards compatibility -->
<a id="schemaapiv1postprogramsignresponse"></a>
<a id="schema_APIV1POSTProgramSignResponse"></a>
<a id="tocSapiv1postprogramsignresponse"></a>
<a id="tocsapiv1postprogramsignresponse"></a>

```json
{
  "error": true,
  "message": "string",
  "sig": "string"
}

```

APIV1POSTProgramSignResponse is the response to `POST /v1/data/sign`
friendly:SignProgramResponse

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|boolean|false|none|none|
|message|string|false|none|none|
|sig|string(byte)|false|none|none|


### APIV1POSTTransactionSignResponse
<!-- backwards compatibility -->
<a id="schemaapiv1posttransactionsignresponse"></a>
<a id="schema_APIV1POSTTransactionSignResponse"></a>
<a id="tocSapiv1posttransactionsignresponse"></a>
<a id="tocsapiv1posttransactionsignresponse"></a>

```json
{
  "error": true,
  "message": "string",
  "signed_transaction": "string"
}

```

APIV1POSTTransactionSignResponse is the response to `POST /v1/transaction/sign`
friendly:SignTransactionResponse

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|boolean|false|none|none|
|message|string|false|none|none|
|signed_transaction|string(byte)|false|none|none|


### APIV1POSTWalletInfoResponse
<!-- backwards compatibility -->
<a id="schemaapiv1postwalletinforesponse"></a>
<a id="schema_APIV1POSTWalletInfoResponse"></a>
<a id="tocSapiv1postwalletinforesponse"></a>
<a id="tocsapiv1postwalletinforesponse"></a>

```json
{
  "error": true,
  "message": "string",
  "wallet_handle": {
    "expires_seconds": 0,
    "wallet": {
      "driver_name": "string",
      "driver_version": 0,
      "id": "string",
      "mnemonic_ux": true,
      "name": "string",
      "supported_txs": [
        "string"
      ]
    }
  }
}

```

APIV1POSTWalletInfoResponse is the response to `POST /v1/wallet/info`
friendly:WalletInfoResponse

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|boolean|false|none|none|
|message|string|false|none|none|
|wallet_handle|[APIV1WalletHandle](#schemaapiv1wallethandle)|false|none|APIV1WalletHandle includes the wallet the handle corresponds to<br>and the number of number of seconds to expiration|


### APIV1POSTWalletInitResponse
<!-- backwards compatibility -->
<a id="schemaapiv1postwalletinitresponse"></a>
<a id="schema_APIV1POSTWalletInitResponse"></a>
<a id="tocSapiv1postwalletinitresponse"></a>
<a id="tocsapiv1postwalletinitresponse"></a>

```json
{
  "error": true,
  "message": "string",
  "wallet_handle_token": "string"
}

```

APIV1POSTWalletInitResponse is the response to `POST /v1/wallet/init`
friendly:InitWalletHandleTokenResponse

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|boolean|false|none|none|
|message|string|false|none|none|
|wallet_handle_token|string|false|none|none|


### APIV1POSTWalletReleaseResponse
<!-- backwards compatibility -->
<a id="schemaapiv1postwalletreleaseresponse"></a>
<a id="schema_APIV1POSTWalletReleaseResponse"></a>
<a id="tocSapiv1postwalletreleaseresponse"></a>
<a id="tocsapiv1postwalletreleaseresponse"></a>

```json
{
  "error": true,
  "message": "string"
}

```

APIV1POSTWalletReleaseResponse is the response to `POST /v1/wallet/release`
friendly:ReleaseWalletHandleTokenResponse

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|boolean|false|none|none|
|message|string|false|none|none|


### APIV1POSTWalletRenameResponse
<!-- backwards compatibility -->
<a id="schemaapiv1postwalletrenameresponse"></a>
<a id="schema_APIV1POSTWalletRenameResponse"></a>
<a id="tocSapiv1postwalletrenameresponse"></a>
<a id="tocsapiv1postwalletrenameresponse"></a>

```json
{
  "error": true,
  "message": "string",
  "wallet": {
    "driver_name": "string",
    "driver_version": 0,
    "id": "string",
    "mnemonic_ux": true,
    "name": "string",
    "supported_txs": [
      "string"
    ]
  }
}

```

APIV1POSTWalletRenameResponse is the response to `POST /v1/wallet/rename`
friendly:RenameWalletResponse

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|boolean|false|none|none|
|message|string|false|none|none|
|wallet|[APIV1Wallet](#schemaapiv1wallet)|false|none|APIV1Wallet is the API's representation of a wallet|


### APIV1POSTWalletRenewResponse
<!-- backwards compatibility -->
<a id="schemaapiv1postwalletrenewresponse"></a>
<a id="schema_APIV1POSTWalletRenewResponse"></a>
<a id="tocSapiv1postwalletrenewresponse"></a>
<a id="tocsapiv1postwalletrenewresponse"></a>

```json
{
  "error": true,
  "message": "string",
  "wallet_handle": {
    "expires_seconds": 0,
    "wallet": {
      "driver_name": "string",
      "driver_version": 0,
      "id": "string",
      "mnemonic_ux": true,
      "name": "string",
      "supported_txs": [
        "string"
      ]
    }
  }
}

```

APIV1POSTWalletRenewResponse is the response to `POST /v1/wallet/renew`
friendly:RenewWalletHandleTokenResponse

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|boolean|false|none|none|
|message|string|false|none|none|
|wallet_handle|[APIV1WalletHandle](#schemaapiv1wallethandle)|false|none|APIV1WalletHandle includes the wallet the handle corresponds to<br>and the number of number of seconds to expiration|


### APIV1POSTWalletResponse
<!-- backwards compatibility -->
<a id="schemaapiv1postwalletresponse"></a>
<a id="schema_APIV1POSTWalletResponse"></a>
<a id="tocSapiv1postwalletresponse"></a>
<a id="tocsapiv1postwalletresponse"></a>

```json
{
  "error": true,
  "message": "string",
  "wallet": {
    "driver_name": "string",
    "driver_version": 0,
    "id": "string",
    "mnemonic_ux": true,
    "name": "string",
    "supported_txs": [
      "string"
    ]
  }
}

```

APIV1POSTWalletResponse is the response to `POST /v1/wallet`
friendly:CreateWalletResponse

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|boolean|false|none|none|
|message|string|false|none|none|
|wallet|[APIV1Wallet](#schemaapiv1wallet)|false|none|APIV1Wallet is the API's representation of a wallet|


### APIV1Wallet
<!-- backwards compatibility -->
<a id="schemaapiv1wallet"></a>
<a id="schema_APIV1Wallet"></a>
<a id="tocSapiv1wallet"></a>
<a id="tocsapiv1wallet"></a>

```json
{
  "driver_name": "string",
  "driver_version": 0,
  "id": "string",
  "mnemonic_ux": true,
  "name": "string",
  "supported_txs": [
    "string"
  ]
}

```

APIV1Wallet is the API's representation of a wallet

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|driver_name|string|false|none|none|
|driver_version|integer(uint32)|false|none|none|
|id|string|false|none|none|
|mnemonic_ux|boolean|false|none|none|
|name|string|false|none|none|
|supported_txs|[[TxType](#schematxtype)]|false|none|[TxType is the type of the transaction written to the ledger]|


### APIV1WalletHandle
<!-- backwards compatibility -->
<a id="schemaapiv1wallethandle"></a>
<a id="schema_APIV1WalletHandle"></a>
<a id="tocSapiv1wallethandle"></a>
<a id="tocsapiv1wallethandle"></a>

```json
{
  "expires_seconds": 0,
  "wallet": {
    "driver_name": "string",
    "driver_version": 0,
    "id": "string",
    "mnemonic_ux": true,
    "name": "string",
    "supported_txs": [
      "string"
    ]
  }
}

```

APIV1WalletHandle includes the wallet the handle corresponds to
and the number of number of seconds to expiration

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expires_seconds|integer(int64)|false|none|none|
|wallet|[APIV1Wallet](#schemaapiv1wallet)|false|none|APIV1Wallet is the API's representation of a wallet|


### CreateWalletRequest
<!-- backwards compatibility -->
<a id="schemacreatewalletrequest"></a>
<a id="schema_CreateWalletRequest"></a>
<a id="tocScreatewalletrequest"></a>
<a id="tocscreatewalletrequest"></a>

```json
{
  "master_derivation_key": [
    0
  ],
  "wallet_driver_name": "string",
  "wallet_name": "string",
  "wallet_password": "string"
}

```

APIV1POSTWalletRequest is the request for `POST /v1/wallet`

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|master_derivation_key|[MasterDerivationKey](#schemamasterderivationkey)|false|none|MasterDerivationKey is used to derive ed25519 keys for use in wallets|
|wallet_driver_name|string|false|none|none|
|wallet_name|string|false|none|none|
|wallet_password|string|false|none|none|


### DeleteKeyRequest
<!-- backwards compatibility -->
<a id="schemadeletekeyrequest"></a>
<a id="schema_DeleteKeyRequest"></a>
<a id="tocSdeletekeyrequest"></a>
<a id="tocsdeletekeyrequest"></a>

```json
{
  "address": "string",
  "wallet_handle_token": "string",
  "wallet_password": "string"
}

```

APIV1DELETEKeyRequest is the request for `DELETE /v1/key`

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|none|
|wallet_handle_token|string|false|none|none|
|wallet_password|string|false|none|none|


### DeleteMultisigRequest
<!-- backwards compatibility -->
<a id="schemadeletemultisigrequest"></a>
<a id="schema_DeleteMultisigRequest"></a>
<a id="tocSdeletemultisigrequest"></a>
<a id="tocsdeletemultisigrequest"></a>

```json
{
  "address": "string",
  "wallet_handle_token": "string",
  "wallet_password": "string"
}

```

APIV1DELETEMultisigRequest is the request for `DELETE /v1/multisig`

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|none|
|wallet_handle_token|string|false|none|none|
|wallet_password|string|false|none|none|


### Digest
<!-- backwards compatibility -->
<a id="schemadigest"></a>
<a id="schema_Digest"></a>
<a id="tocSdigest"></a>
<a id="tocsdigest"></a>

```json
[
  0
]

```

Digest represents a 32-byte value holding the 256-bit Hash digest.

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Digest represents a 32-byte value holding the 256-bit Hash digest.|[integer]|false|none|none|


### ed25519PrivateKey
<!-- backwards compatibility -->
<a id="schemaed25519privatekey"></a>
<a id="schema_ed25519PrivateKey"></a>
<a id="tocSed25519privatekey"></a>
<a id="tocsed25519privatekey"></a>

```json
[
  0
]

```

#### Properties

*None*


### ed25519PublicKey
<!-- backwards compatibility -->
<a id="schemaed25519publickey"></a>
<a id="schema_ed25519PublicKey"></a>
<a id="tocSed25519publickey"></a>
<a id="tocsed25519publickey"></a>

```json
[
  0
]

```

#### Properties

*None*


### ed25519Signature
<!-- backwards compatibility -->
<a id="schemaed25519signature"></a>
<a id="schema_ed25519Signature"></a>
<a id="tocSed25519signature"></a>
<a id="tocsed25519signature"></a>

```json
[
  0
]

```

Classical signatures */

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Classical signatures */|[integer]|false|none|none|


### ExportKeyRequest
<!-- backwards compatibility -->
<a id="schemaexportkeyrequest"></a>
<a id="schema_ExportKeyRequest"></a>
<a id="tocSexportkeyrequest"></a>
<a id="tocsexportkeyrequest"></a>

```json
{
  "address": "string",
  "wallet_handle_token": "string",
  "wallet_password": "string"
}

```

APIV1POSTKeyExportRequest is the request for `POST /v1/key/export`

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|none|
|wallet_handle_token|string|false|none|none|
|wallet_password|string|false|none|none|


### ExportMasterKeyRequest
<!-- backwards compatibility -->
<a id="schemaexportmasterkeyrequest"></a>
<a id="schema_ExportMasterKeyRequest"></a>
<a id="tocSexportmasterkeyrequest"></a>
<a id="tocsexportmasterkeyrequest"></a>

```json
{
  "wallet_handle_token": "string",
  "wallet_password": "string"
}

```

APIV1POSTMasterKeyExportRequest is the request for `POST /v1/master-key/export`

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|wallet_handle_token|string|false|none|none|
|wallet_password|string|false|none|none|


### ExportMultisigRequest
<!-- backwards compatibility -->
<a id="schemaexportmultisigrequest"></a>
<a id="schema_ExportMultisigRequest"></a>
<a id="tocSexportmultisigrequest"></a>
<a id="tocsexportmultisigrequest"></a>

```json
{
  "address": "string",
  "wallet_handle_token": "string"
}

```

APIV1POSTMultisigExportRequest is the request for `POST /v1/multisig/export`

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|none|
|wallet_handle_token|string|false|none|none|


### GenerateKeyRequest
<!-- backwards compatibility -->
<a id="schemageneratekeyrequest"></a>
<a id="schema_GenerateKeyRequest"></a>
<a id="tocSgeneratekeyrequest"></a>
<a id="tocsgeneratekeyrequest"></a>

```json
{
  "display_mnemonic": true,
  "wallet_handle_token": "string"
}

```

APIV1POSTKeyRequest is the request for `POST /v1/key`

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|display_mnemonic|boolean|false|none|none|
|wallet_handle_token|string|false|none|none|


### ImportKeyRequest
<!-- backwards compatibility -->
<a id="schemaimportkeyrequest"></a>
<a id="schema_ImportKeyRequest"></a>
<a id="tocSimportkeyrequest"></a>
<a id="tocsimportkeyrequest"></a>

```json
{
  "private_key": [
    0
  ],
  "wallet_handle_token": "string"
}

```

APIV1POSTKeyImportRequest is the request for `POST /v1/key/import`

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|private_key|[PrivateKey](#schemaprivatekey)|false|none|none|
|wallet_handle_token|string|false|none|none|


### ImportMultisigRequest
<!-- backwards compatibility -->
<a id="schemaimportmultisigrequest"></a>
<a id="schema_ImportMultisigRequest"></a>
<a id="tocSimportmultisigrequest"></a>
<a id="tocsimportmultisigrequest"></a>

```json
{
  "multisig_version": 0,
  "pks": [
    [
      0
    ]
  ],
  "threshold": 0,
  "wallet_handle_token": "string"
}

```

APIV1POSTMultisigImportRequest is the request for `POST /v1/multisig/import`

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|multisig_version|integer(uint8)|false|none|none|
|pks|[[PublicKey](#schemapublickey)]|false|none|none|
|threshold|integer(uint8)|false|none|none|
|wallet_handle_token|string|false|none|none|


### InitWalletHandleTokenRequest
<!-- backwards compatibility -->
<a id="schemainitwallethandletokenrequest"></a>
<a id="schema_InitWalletHandleTokenRequest"></a>
<a id="tocSinitwallethandletokenrequest"></a>
<a id="tocsinitwallethandletokenrequest"></a>

```json
{
  "wallet_id": "string",
  "wallet_password": "string"
}

```

APIV1POSTWalletInitRequest is the request for `POST /v1/wallet/init`

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|wallet_id|string|false|none|none|
|wallet_password|string|false|none|none|


### ListKeysRequest
<!-- backwards compatibility -->
<a id="schemalistkeysrequest"></a>
<a id="schema_ListKeysRequest"></a>
<a id="tocSlistkeysrequest"></a>
<a id="tocslistkeysrequest"></a>

```json
{
  "wallet_handle_token": "string"
}

```

APIV1POSTKeyListRequest is the request for `POST /v1/key/list`

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|wallet_handle_token|string|false|none|none|


### ListMultisigRequest
<!-- backwards compatibility -->
<a id="schemalistmultisigrequest"></a>
<a id="schema_ListMultisigRequest"></a>
<a id="tocSlistmultisigrequest"></a>
<a id="tocslistmultisigrequest"></a>

```json
{
  "wallet_handle_token": "string"
}

```

APIV1POSTMultisigListRequest is the request for `POST /v1/multisig/list`

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|wallet_handle_token|string|false|none|none|


### ListWalletsRequest
<!-- backwards compatibility -->
<a id="schemalistwalletsrequest"></a>
<a id="schema_ListWalletsRequest"></a>
<a id="tocSlistwalletsrequest"></a>
<a id="tocslistwalletsrequest"></a>

```json
{}

```

APIV1GETWalletsRequest is the request for `GET /v1/wallets`

#### Properties

*None*


### MasterDerivationKey
<!-- backwards compatibility -->
<a id="schemamasterderivationkey"></a>
<a id="schema_MasterDerivationKey"></a>
<a id="tocSmasterderivationkey"></a>
<a id="tocsmasterderivationkey"></a>

```json
[
  0
]

```

MasterDerivationKey is used to derive ed25519 keys for use in wallets

#### Properties

*None*


### MultisigSig
<!-- backwards compatibility -->
<a id="schemamultisigsig"></a>
<a id="schema_MultisigSig"></a>
<a id="tocSmultisigsig"></a>
<a id="tocsmultisigsig"></a>

```json
{
  "Subsigs": [
    {
      "Key": [
        0
      ],
      "Sig": [
        0
      ]
    }
  ],
  "Threshold": 0,
  "Version": 0
}

```

MultisigSig is the structure that holds multiple Subsigs

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Subsigs|[[MultisigSubsig](#schemamultisigsubsig)]|false|none|[MultisigSubsig is a struct that holds a pair of public key and signatures<br>signatures may be empty]|
|Threshold|integer(uint8)|false|none|none|
|Version|integer(uint8)|false|none|none|


### MultisigSubsig
<!-- backwards compatibility -->
<a id="schemamultisigsubsig"></a>
<a id="schema_MultisigSubsig"></a>
<a id="tocSmultisigsubsig"></a>
<a id="tocsmultisigsubsig"></a>

```json
{
  "Key": [
    0
  ],
  "Sig": [
    0
  ]
}

```

MultisigSubsig is a struct that holds a pair of public key and signatures
signatures may be empty

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Key|[PublicKey](#schemapublickey)|false|none|none|
|Sig|[Signature](#schemasignature)|false|none|none|


### PrivateKey
<!-- backwards compatibility -->
<a id="schemaprivatekey"></a>
<a id="schema_PrivateKey"></a>
<a id="tocSprivatekey"></a>
<a id="tocsprivatekey"></a>

```json
[
  0
]

```

#### Properties

*None*


### PublicKey
<!-- backwards compatibility -->
<a id="schemapublickey"></a>
<a id="schema_PublicKey"></a>
<a id="tocSpublickey"></a>
<a id="tocspublickey"></a>

```json
[
  0
]

```

#### Properties

*None*


### ReleaseWalletHandleTokenRequest
<!-- backwards compatibility -->
<a id="schemareleasewallethandletokenrequest"></a>
<a id="schema_ReleaseWalletHandleTokenRequest"></a>
<a id="tocSreleasewallethandletokenrequest"></a>
<a id="tocsreleasewallethandletokenrequest"></a>

```json
{
  "wallet_handle_token": "string"
}

```

APIV1POSTWalletReleaseRequest is the request for `POST /v1/wallet/release`

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|wallet_handle_token|string|false|none|none|


### RenameWalletRequest
<!-- backwards compatibility -->
<a id="schemarenamewalletrequest"></a>
<a id="schema_RenameWalletRequest"></a>
<a id="tocSrenamewalletrequest"></a>
<a id="tocsrenamewalletrequest"></a>

```json
{
  "wallet_id": "string",
  "wallet_name": "string",
  "wallet_password": "string"
}

```

APIV1POSTWalletRenameRequest is the request for `POST /v1/wallet/rename`

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|wallet_id|string|false|none|none|
|wallet_name|string|false|none|none|
|wallet_password|string|false|none|none|


### RenewWalletHandleTokenRequest
<!-- backwards compatibility -->
<a id="schemarenewwallethandletokenrequest"></a>
<a id="schema_RenewWalletHandleTokenRequest"></a>
<a id="tocSrenewwallethandletokenrequest"></a>
<a id="tocsrenewwallethandletokenrequest"></a>

```json
{
  "wallet_handle_token": "string"
}

```

APIV1POSTWalletRenewRequest is the request for `POST /v1/wallet/renew`

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|wallet_handle_token|string|false|none|none|


### Signature
<!-- backwards compatibility -->
<a id="schemasignature"></a>
<a id="schema_Signature"></a>
<a id="tocSsignature"></a>
<a id="tocssignature"></a>

```json
[
  0
]

```

#### Properties

*None*


### SignMultisigRequest
<!-- backwards compatibility -->
<a id="schemasignmultisigrequest"></a>
<a id="schema_SignMultisigRequest"></a>
<a id="tocSsignmultisigrequest"></a>
<a id="tocssignmultisigrequest"></a>

```json
{
  "partial_multisig": {
    "Subsigs": [
      {
        "Key": [
          0
        ],
        "Sig": [
          0
        ]
      }
    ],
    "Threshold": 0,
    "Version": 0
  },
  "public_key": [
    0
  ],
  "signer": [
    0
  ],
  "transaction": "string",
  "wallet_handle_token": "string",
  "wallet_password": "string"
}

```

APIV1POSTMultisigTransactionSignRequest is the request for `POST /v1/multisig/sign`

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|partial_multisig|[MultisigSig](#schemamultisigsig)|false|none|MultisigSig is the structure that holds multiple Subsigs|
|public_key|[PublicKey](#schemapublickey)|false|none|none|
|signer|[Digest](#schemadigest)|false|none|none|
|transaction|string(byte)|false|none|none|
|wallet_handle_token|string|false|none|none|
|wallet_password|string|false|none|none|


### SignProgramMultisigRequest
<!-- backwards compatibility -->
<a id="schemasignprogrammultisigrequest"></a>
<a id="schema_SignProgramMultisigRequest"></a>
<a id="tocSsignprogrammultisigrequest"></a>
<a id="tocssignprogrammultisigrequest"></a>

```json
{
  "address": "string",
  "data": "string",
  "partial_multisig": {
    "Subsigs": [
      {
        "Key": [
          0
        ],
        "Sig": [
          0
        ]
      }
    ],
    "Threshold": 0,
    "Version": 0
  },
  "public_key": [
    0
  ],
  "wallet_handle_token": "string",
  "wallet_password": "string"
}

```

APIV1POSTMultisigProgramSignRequest is the request for `POST /v1/multisig/signprogram`

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|none|
|data|string(byte)|false|none|none|
|partial_multisig|[MultisigSig](#schemamultisigsig)|false|none|MultisigSig is the structure that holds multiple Subsigs|
|public_key|[PublicKey](#schemapublickey)|false|none|none|
|wallet_handle_token|string|false|none|none|
|wallet_password|string|false|none|none|


### SignProgramRequest
<!-- backwards compatibility -->
<a id="schemasignprogramrequest"></a>
<a id="schema_SignProgramRequest"></a>
<a id="tocSsignprogramrequest"></a>
<a id="tocssignprogramrequest"></a>

```json
{
  "address": "string",
  "data": "string",
  "wallet_handle_token": "string",
  "wallet_password": "string"
}

```

APIV1POSTProgramSignRequest is the request for `POST /v1/program/sign`

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|string|false|none|none|
|data|string(byte)|false|none|none|
|wallet_handle_token|string|false|none|none|
|wallet_password|string|false|none|none|


### SignTransactionRequest
<!-- backwards compatibility -->
<a id="schemasigntransactionrequest"></a>
<a id="schema_SignTransactionRequest"></a>
<a id="tocSsigntransactionrequest"></a>
<a id="tocssigntransactionrequest"></a>

```json
{
  "public_key": [
    0
  ],
  "transaction": "string",
  "wallet_handle_token": "string",
  "wallet_password": "string"
}

```

APIV1POSTTransactionSignRequest is the request for `POST /v1/transaction/sign`

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|public_key|[PublicKey](#schemapublickey)|false|none|none|
|transaction|string(byte)|false|none|Base64 encoding of msgpack encoding of a `Transaction` object<br>Note: SDK and goal usually generate `SignedTxn` objects<br>in that case, the field `txn` / `Transaction` of the<br>generated `SignedTxn` object needs to be used|
|wallet_handle_token|string|false|none|none|
|wallet_password|string|false|none|none|


### TxType
<!-- backwards compatibility -->
<a id="schematxtype"></a>
<a id="schema_TxType"></a>
<a id="tocStxtype"></a>
<a id="tocstxtype"></a>

```json
"string"

```

TxType is the type of the transaction written to the ledger

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|string|false|none|TxType is the type of the transaction written to the ledger|


### VersionsRequest
<!-- backwards compatibility -->
<a id="schemaversionsrequest"></a>
<a id="schema_VersionsRequest"></a>
<a id="tocSversionsrequest"></a>
<a id="tocsversionsrequest"></a>

```json
{}

```

VersionsRequest is the request for `GET /versions`

#### Properties

*None*


### VersionsResponse
<!-- backwards compatibility -->
<a id="schemaversionsresponse"></a>
<a id="schema_VersionsResponse"></a>
<a id="tocSversionsresponse"></a>
<a id="tocsversionsresponse"></a>

```json
{
  "versions": [
    "string"
  ]
}

```

VersionsResponse is the response to `GET /versions`
friendly:VersionsResponse

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|versions|[string]|false|none|none|


### WalletInfoRequest
<!-- backwards compatibility -->
<a id="schemawalletinforequest"></a>
<a id="schema_WalletInfoRequest"></a>
<a id="tocSwalletinforequest"></a>
<a id="tocswalletinforequest"></a>

```json
{
  "wallet_handle_token": "string"
}

```

APIV1POSTWalletInfoRequest is the request for `POST /v1/wallet/info`

#### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|wallet_handle_token|string|false|none|none|

