const pool = require('../library/database');

// membuat undangan baru
exports.createInvitation = async (req, res) => {
    const { id_undangan, nama,	bride_name,	groom_name,	wedding_date,	location	 } = req.body;
    console.log('Request Body:', req.body);
    try {
        const sql = 'INSERT INTO tbl_detail_invitations (id_undangan, nama, bride_name, groom_name, wedding_date,	location) VALUES ( ?,?,?,?,?,?)';
        const [result] = await pool.query(sql, [id_undangan, nama,	bride_name,	groom_name,	wedding_date,	location]);       
        res.status(201).json({ message: 'Undangan berhasil dibuat', id: result.insertId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Gagal membuat undangan' });
    }
};

// melihat semua undangan
exports.getAllInvitations = async (_req, res) => {
  try {
    const results = await pool.query('SELECT * FROM tbl_detail_invitations');
    
    // Jika tidak ada undangan yang ditemukan
    if (results.length === 0) {
      return res.status(404).json({ message: 'Tidak ada undangan yang tersedia' });
    }

    res.status(200).json(results);
  } catch (error) {
    console.error('Database query error:', error);
    res.status(500).json({ error: 'Gagal mengambil undangan', details: error.message });
  }
};

// detail undangan berdasarkan ID
exports.getInvitationById = async (req, res) => {
    const { id_undangan } = req.params;

    try {
        const [results] = await pool.query('SELECT * FROM tbl_detail_invitations  WHERE id_undangan = ?', [id_undangan]);

        if (results.length === 0) {
            return res.status(404).json({ error: 'Undangan tidak ditemukan' });
        }

        res.status(200).json(results[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Gagal mengambil undangan' });
    }
};

//  menghapus undangan berdasarkan ID
exports.deleteInvitation = async (req, res) => {
    const { id_undangan } = req.params;

    try {
        const [result] = await pool.query('DELETE FROM tbl_detail_invitations WHERE id_undangan = ?', [id_undangan]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Undangan tidak ditemukan' });
        }

        res.status(200).json({ message: 'Undangan berhasil dihapus' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Gagal menghapus undangan' });
    }
};
