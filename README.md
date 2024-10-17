# README.md

IMPORTANT: Once you've cloned this to your forked repository, ensure that you continuously update this document as you complete each task to demonstrate your ongoing progress.

Kyrollos Iskandar's (21704248) shared repository link: https://github.com/21704248/A2-Kyrollos-21704248.git


Make sure for **your case it is in Private** (No longer necessary)
## Access Database
1 **Plsql Cheat Sheet:**
You can refer to the PostgreSQL cheat sheet [here](https://www.postgresqltutorial.com/postgresql-cheat-sheet/).

2 **Know the Container ID:**
To find out the container ID, execute the following command:
   ```bash
   docker ps
    9958a3a534c9   testsystem-nginx           "/docker-entrypoint.…"   6 minutes ago   Up 6 minutes   0.0.0.0:80->80/tcp   testsystem-nginx-1
    53121618baa4   testsystem-frontend        "docker-entrypoint.s…"   6 minutes ago   Up 6 minutes   3000/tcp             testsystem-frontend-1
    c89e46ac94b0   testsystem-api             "docker-entrypoint.s…"   6 minutes ago   Up 6 minutes   5000/tcp             testsystem-api-1
    9f4aea7cf538   postgres:15.3-alpine3.18   "docker-entrypoint.s…"   6 minutes ago   Up 6 minutes   5432/tcp             testsystem-db-1
   ```
3. Running the application

**docker compose command:**
   ```bash
   docker compose up --build
   ```

4 **Access postgreSQL in the container:**
Once you have the container ID, you can execute the container using the following command:
You will see the example of running the PostgreSQL inside the container.
   ```bash
   docker exec -it testsystem-db-1 psql -U postgres
   choiruzain@MacMarichoy TestSystem % docker exec -it testsystem-db-1 psql -U postgres                                       
   psql (15.3)
   Type "help" for help.
   
   postgres=# \dt
             List of relations
    Schema |   Name   | Type  |  Owner   
   --------+----------+-------+----------
    public | contacts | table | postgres
    public | phones   | table | postgres
   (2 rows)
  
    postgres=# select * from contacts;
    id |  name  |         createdAt         |         updatedAt         
   ----+--------+---------------------------+---------------------------
     1 | Helmut | 2024-08-08 11:57:57.88+00 | 2024-08-08 11:57:57.88+00
    (1 row)
    postgres=# select * from phones;
    id | phone_type |   number    | contactId |         createdAt          |         updatedAt          
   ----+------------+-------------+-----------+----------------------------+----------------------------
     1 | Work       | 081431      |         1 | 2024-08-08 11:59:04.386+00 | 2024-08-08 11:59:04.386+00


postgres=# select * from contacts;
   ```
Replace `container_ID` with the actual ID of the container you want to execute.

## Executing API

### Contact API


1. Add contacts API  (POST)
```bash
http post http://localhost/api/contacts name="Choiru"
        
choiruzain@MacMarichoy-7 TestSystem % http post http://localhost/api/contacts name="Choiru"
HTTP/1.1 200 OK
Access-Control-Allow-Origin: http://localhost:3000
Connection: keep-alive
Content-Length: 102
Content-Type: application/json; charset=utf-8
Date: Thu, 08 Aug 2024 21:01:53 GMT
ETag: W/"66-FmPYAaIkyQoroDwP2JsAZjWTAxs"
Server: nginx/1.25.1
Vary: Origin
X-Powered-By: Express

{
"createdAt": "2024-08-08T21:01:53.017Z",
"id": 1,
"name": "Choiru",
"updatedAt": "2024-08-08T21:01:53.017Z"
}

```
2 Get contacts API  (GET)

```bash
http get http://localhost/api/contacts


choiruzain@MacMarichoy-7 TestSystem % http get http://localhost/api/contacts
HTTP/1.1 200 OK
Access-Control-Allow-Origin: http://localhost:3000
Connection: keep-alive
Content-Length: 104
Content-Type: application/json; charset=utf-8
Date: Thu, 08 Aug 2024 21:04:58 GMT
ETag: W/"68-V+4KuL2xahYt8YAkKG6rKdR7wHg"
Server: nginx/1.25.1
Vary: Origin
X-Powered-By: Express

[
{
"createdAt": "2024-08-08T21:01:53.017Z",
"id": 1,
"name": "Choiru",
"updatedAt": "2024-08-08T21:01:53.017Z"
}
]


```
3. Show/create the API commmand to delete the contacts (DELETE)

```bash





```

4. Show/create the API command to edit the contacts (PUT)
```
http get http://localhost/api/contacts/1/phones

```

### Phone API

# Documentation and explanation of my work
## Task 1
### Task 1.1
I looked for the line in Contact.js that said
```bash
<button className='button red' onClick={doDelete}>Delete</button>
```

and changed it to
```bash
<button className='button red' onClick={doDelete}>Delete contact</button>
```

### Task 1.2
I looked for the line in NewPhone.js that said
```bash
<button className='button green' type='submit'>Add</button>
```
and changed it to
```bash
<button className='button green' type='submit'>Add Kyrollos' Phone</button>
```

### Task 1.3
Added an array in NewContact.js to store categories.
```bash
const [nameOptions, setNameOptions] = useState([]);
```
Then I replaced the line below
```bash
input type='text' placeholder='Name' onChange={(e) => setName(e.target.value)} value={name}/
```
with the code below
```bash
<select value={nameOptions} onChange={(e) => setNameOptions(e.target.value)}>
                <option value="Max Well">Max Well</option>
                <option value="Tent Well">Tent Well</option>
                <option value="Went Well">Went Well</option>
                <option value="Fred Well">Fred Well</option>
            </select>
```

### Task 1.4
Found the code below in PhoneList.js
```bash             <tr>
                        <th>Name</th>
                        <th>Number</th>
                        <th></th>
                    </tr
```
Changed
```bash
<th>Name<\th>
```
to
```bash
<th>Phone Type<\th>
```


## Task 2
### Task 2.1
```bash
vboxuser@CSE5006:~/Documents/assignment2$ http get http://localhost/api/contacts

HTTP/1.1 200 OK
Access-Control-Allow-Origin: http://localhost:3000
Connection: keep-alive
Content-Length: 106
Content-Type: application/json; charset=utf-8
Date: Thu, 17 Oct 2024 10:18:53 GMT
ETag: W/"6a-zoKUK1o85J3s+038NVY+5/M0eGo"
Server: nginx/1.25.1
Vary: Origin
X-Powered-By: Express

[
    {
        "createdAt": "2024-10-17T10:15:45.920Z",
        "id": 1,
        "name": "Kyrollos",
        "updatedAt": "2024-10-17T10:15:45.920Z"
    }
]

```
Note that I ran Task 2.2 before Task 2.1.

### Task 2.2
```bash
hvboxuser@CSE5006:~/Documents/assignment2$ http post http://localhost/api/contacts name="Kyrollos"

HTTP/1.1 200 OK
Access-Control-Allow-Origin: http://localhost:3000
Connection: keep-alive
Content-Length: 104
Content-Type: application/json; charset=utf-8
Date: Thu, 17 Oct 2024 10:15:45 GMT
ETag: W/"68-YNVnm50FuqOTsNzNE7qnsT76+QM"
Server: nginx/1.25.1
Vary: Origin
X-Powered-By: Express

{
    "createdAt": "2024-10-17T10:15:45.920Z",
    "id": 1,
    "name": "Kyrollos",
    "updatedAt": "2024-10-17T10:15:45.920Z"
}

```

### Task 2.3
```bash
vboxuser@CSE5006:~/Documents/assignment2$ http delete http://localhost/api/contacts name="Kyrollos"

HTTP/1.1 404 Not Found
Access-Control-Allow-Origin: http://localhost:3000
Connection: keep-alive
Content-Length: 154
Content-Security-Policy: default-src 'none'
Content-Type: text/html; charset=utf-8
Date: Thu, 17 Oct 2024 10:23:55 GMT
Server: nginx/1.25.1
Vary: Origin
X-Content-Type-Options: nosniff
X-Powered-By: Express

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot DELETE /api/contacts</pre>
</body>
</html>

```
Note that I ran this task *after* having run Tasks 2.1 and 2.2. Hence, a contact named "Kyrollos" existed.

### Task 2.4
