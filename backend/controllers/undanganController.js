const pool = require('../library/database');

// Controller untuk membuat undangan baru
exports.createInvitation = async (req, res) => {
    const { event_id, guest_id, sent_at } = req.body;

    try {
        const sql = 'INSERT INTO invitations (event_id, guest_id, sent_at) VALUES (?, ?, ?)';
        const [result] = await pool.query(sql, [event_id, guest_id, sent_at]);
        
        res.status(201).json({ message: 'Undangan berhasil dibuat', id: result.insertId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Gagal membuat undangan' });
    }
};

// Controller untuk mendapatkan semua undangan
exports.getAllInvitations = async (req, res) => {
  try {
      const [results] = await pool.query('SELECT * FROM invitations');
      
      // Jika tidak ada undangan yang ditemukan
      if (results.length === 0) {
          return res.status(404).json({ message: 'Tidak ada undangan yang tersedia' });
      }

      res.status(200).json(results);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Gagal mengambil undangan' });
  }
};


// Controller untuk mendapatkan detail undangan berdasarkan ID
exports.getInvitationById = async (req, res) => {
    const { id } = req.params;

    try {
        const [results] = await pool.query('SELECT * FROM invitations WHERE id = ?', [id]);

        if (results.length === 0) {
            return res.status(404).json({ error: 'Undangan tidak ditemukan' });
        }

        res.status(200).json(results[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Gagal mengambil undangan' });
    }
};

// Controller untuk menghapus undangan berdasarkan ID
exports.deleteInvitation = async (req, res) => {
    const { id } = req.params;

    try {
        const [result] = await pool.query('DELETE FROM invitations WHERE id = ?', [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Undangan tidak ditemukan' });
        }

        res.status(200).json({ message: 'Undangan berhasil dihapus' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Gagal menghapus undangan' });
    }
};
