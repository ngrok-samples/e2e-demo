# Use Cypress base image
FROM cypress/browsers:latest

# Change to a non-root user
USER 1001

ENV FRONTEND_URL https://burgers-test.ngrok.app

# at build time:
# set the current directory to `/src`
WORKDIR /src 

# copy the manifest file: package.json
COPY package.json /src

# from a shell, run `npm install`
RUN npm install 

# copy the content into place
COPY . /src

# as the container starts:
# `npm run cy:run`
CMD [ "npm", "run", "cy:run" ]
