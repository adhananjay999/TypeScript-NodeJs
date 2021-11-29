import 'dotenv/config';

const MONGO_OPTIONS={
useUnifiedTopology:true,
useNewUrlParser:true,
socketTimeoutMS:30000,
keepAlive:true,
// poolSize:5,
autoIndex:false,
retryWrites:false
};
const MONGO_USERNAME=process.env.DB_USER||'';
const MONGO_PASSWORD=process.env.DB_PASSWORD||'';
const MONGO_HOST=process.env.MONGO_URL||'';

const MONGO={
    host:MONGO_HOST,
    username:MONGO_USERNAME,
    password:MONGO_PASSWORD,
    options:MONGO_OPTIONS,
    url:`mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}`
}
const SERVER_HOSTNAME=process.env.SERVER_HOST || 'localhost';
const SERVER_PORT=process.env.PORT || '6060';

const SERVER={
    hostname:SERVER_HOSTNAME,
    port:SERVER_PORT
};

const config={
    mongo:MONGO,
    config:SERVER
};

export default config;