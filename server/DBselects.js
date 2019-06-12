var db = require('./connectDB');

function getID() {
    db.serialize(() => {
        db.each(`SELECT PlaylistId as id,
                    Name as name
             FROM playlists`, (err, row) => {
                if (err) {
                    console.error(err.message);
                }
                console.log(row.id + "\t" + row.name);
            });
    });
}
