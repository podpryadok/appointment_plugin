var db = require('./connectDB');

function getID() {
    const dbconnected = db.connecting();

    dbconnected.serialize(() => {
        db.each(`SELECT PlaylistId as id,
                    Name as name
             FROM playlists`, (err, row) => {
                if (err) {
                    console.error(err.message);
                }
                console.log(row.id + "\t" + row.name);
            });
    });

    dbconnected.close((err) => {
        if(err){
            console.log(err.message);
        }
        console.log('Close connect');
    });
}

exports.getID = getID();